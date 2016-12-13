import marked = require('marked')
const globby = require('globby')
import fs = require('fs')
import * as _ from 'lodash'
const toMarkdown = require('to-markdown')

const ignore = [ '!scripts/**',
                 '!output/**',
                 '!appendix/**',
                 '!bibliography/**',
                 '!README.md' ]

const read = [ '*',
               '**/*.md' ]

async function main () {
    let files = await globby([].concat(['**/*.md'], ignore))
    let directories = await globby([].concat(['*'], ignore))

    files = files.sort().map(path => {
        return {"path": path}
    })

    files.map(file => {
        file.content = fs.readFileSync(file.path, 'utf8')
        file.lex = marked.lexer(file.content)
    })

    directories = directories.sort().map(path => {
        return {"path": path}
    })

    // Create chapter headers.
    directories.map(dir => {
        dir.content = '# ' + dir.path.substring(2) + '\n'
        dir.lex = marked.lexer(dir.content)
    })

    // Delete chapter headers with content.
    files.map(file => {
        const chapter = file.path.split('/')[0]
        directories = _.reject(directories, { 'path':chapter })
    })

    let structure = [].concat(files, directories)
    structure = _.sortBy(structure, ['path'])

    structure.map( o => console.log(o.path) )

    let thesis = []
    structure.map(file => {
        const path = file.path.split('/')
        const depth = path.length
        const chapter = path[0]
        const fileName = path[depth-1]
        const content = file.content
        const lex = file.lex

        // Count the numbers of times a '0-' appears in the path.
        const zeros = path.map(dir => dir.includes('0-') ? 1 : 0)
                          .reduce( (a,b) => a+b )

        // Add the number of subdirectories deep we are to the heading depth
      // (minus the number of 0s).
        const extraDepth = depth - zeros - 2

        const updatedLex = lex.map( markdown => {
            if (markdown.type === 'heading') {
                markdown.depth += extraDepth
                if (markdown.depth < 0) {
                    markdown.depth = 0
                }
            }
            return markdown
        })

        thesis = thesis.concat(updatedLex)

    })


    thesis['links'] = {}


    const renderer = new marked.Renderer();

    // INLINE

    renderer.strong = (text) => {
        return '\\textbf{' + text + '}'
    }

    renderer.em = (text) => {
        return '\\emph{' + text + '}'
    }

    renderer.br = () => {
        return '\\\\'
    }

    renderer.link = (href, title, text) => {
        return '\\url{' + href + '}'
    }

    renderer.codespan = (code) => {
        return '\\verb`' + code + '`'
    }

    // BLOCK

    renderer.heading = (text, level) => {
        return '\\level{' + (level) + '}{' + text + '}\n'
    }

    renderer.code = (code, language) => {
        return '\\begin{verbatim}\n' +
               code + '\n' +
               '\\end{verbatim}\n'
    }

    renderer.blockquote = (quote) => {
        return '\\begin{displayquote}' + '\n' +
               quote +
               '\\end{displayquote}' + '\n\n'
    }

    renderer.paragraph = (text) => {
        return '' + text + '\n\n'
    }

    renderer.list = (body, ordered) => {
        const style = ordered ? 'enumerate' : 'itemize'
        return '\\begin{' + style + '}\n' +
                   body +
               '\\end{' + style + '}\n'

    }

    renderer.listitem = (text) => {
        return '\\item{' + text + '}\n'
    }

    renderer.table = (header, body, flags) => {
        flags = flags.map( str => str.charAt(0) )
        const structure = '|' + flags.join('|') + '|'

        return '\\begin{tabular}{' + structure + '}\n' +
               '\\hline\n' +
               header +
               body +
               '\\end{tabular} \\\\\n\n'
    }

    renderer.tablerow = (content) => {
        return content + ' \\\\ ' + '\\hline\n'
    }

    renderer.tablecell = (content, flags) => {
        const separator = (flags.last) ? '' : ' & '
        if (flags.header) {
            return '\\textbf{' + content + '}' + separator
        } else {
            return content + separator
        }
    }

    marked.setOptions({
        renderer: renderer,
        sanitize: false
    })


    let fullThesis = `
%%%%%%%%%%%%%%%%%%%%%%%
% Setup level command %
%%%%%%%%%%%%%%%%%%%%%%%
\\documentclass[a4paper]{report}
\\makeatletter
\\newcommand\\level[1]{%
  \\ifcase#1\\relax\\expandafter\\chapter\\or
    \\expandafter\\section\\or
    \\expandafter\\subsection\\or
    \\expandafter\\subsubsection\\else
    \\def\\next{\\@level{#1}}\\expandafter\\next
  \\fi}
\\newcommand{\\@level}[1]{%
  \\@startsection{level#1}
    {#1}
    {\\z@}%
    {-3.25ex\\@plus -1ex \\@minus -.2ex}%
    {1.5ex \\@plus .2ex}%
    {\\normalfont\\normalsize\\bfseries}}

\\newcounter{level4}[subsubsection]
\\@namedef{thelevel4}{\\thesubsubsection.\\arabic{level4}}
\\@namedef{level4mark}#1{}
\\count@=4
\\loop\\ifnum\\count@<100
  \\begingroup\\edef\\x{\\endgroup
    \\noexpand\\newcounter{level\\number\\numexpr\\count@+1\\relax}[level\\number\\count@]
    \\noexpand\\@namedef{thelevel\\number\\numexpr\\count@+1\\relax}{%
      \\noexpand\\@nameuse{thelevel\\number\\count@}.\\noexpand\\arabic{level\\number\\numexpr\\count@+1\\relax}}
    \\noexpand\\@namedef{level\\number\\numexpr\\count@+1\\relax mark}####1{}}
  \\x
  \\advance\\count@\\@ne
\\repeat
\\makeatother
\\setcounter{secnumdepth}{100}

%%%%%%%%%%%%%%%%%%%%%
% Fix double quotes %
%%%%%%%%%%%%%%%%%%%%%
\\usepackage [english]{babel}
\\usepackage [autostyle, english = american]{csquotes}
\\MakeOuterQuote{"}

%%%%%%%%%%%%
% Packages %
%%%%%%%%%%%%
\\usepackage{hyperref}
\\usepackage{setspace}
\\usepackage{csquotes}
% \\usepackage{gemoetry}

%%%%%%%%%%%%%%%%%%%%%%
% Package Formatting %
%%%%%%%%%%%%%%%%%%%%%%
% \\gemoetry{legalpaper, margin=1in, lmargin=1.5inch}
\\doublespacing

\\begin{document}
`
    fullThesis += marked.parser(thesis)
    fullThesis += '\\end{document}'

    fs.writeFileSync('./output/thesis.tex', fullThesis)
}

main()
