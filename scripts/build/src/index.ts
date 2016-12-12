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

    let thesis = []
    structure.map(file => {
        const path = file.path.split('/')
        const depth = path.length
        const chapter = path[0]
        const fileName = path[depth-1]
        const content = file.content
        const lex = file.lex

        const zeros = path.map(dir => dir.includes('0-') ? 1 : 0)
                          .reduce( (a,b) => a+b )

        const extraDepth = depth - zeros - 1

        const updatedLex = lex.map( markdown => {
            if (markdown.type === 'heading') {
                markdown.depth += extraDepth
            }
            return markdown
        })

        thesis = thesis.concat(updatedLex)

    })


    thesis['links'] = {}

    const thesisHTML = marked.parser(thesis)

    console.log(toMarkdown(thesisHTML))



    // fs.writeFileSync('./output/thesis.html', marked.parser(thesis))
}

main()
