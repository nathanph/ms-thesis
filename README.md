Master's Thesis
===============
Governance and Voting Systems Within Decentralized Organizations and Communities
--------------------------------------------------------------------------------
Author: Nathan Hernandez

I'll be tracking my thesis here. I'm using Markdown for now so I don't waste
time formatting text instead of writing it. Eventually I'll create a TeX
equivalent.

### Building a PDF version
#### Installing dependencies
##### Yarn
```
$ cd scripts/build
$ yarn
$ yarn watch
```

##### npm
```
$ cd scripts/build
$ npm install
$ npm run watch
```
#### Building: Markdown -> Latex -> PDF
I've done a silly amount of work to get working, maybe I'll publish this as a
tool one day. Run these commands from the root of the project.
```
$ node scripts/build/lib/index.js
$ pdflatex -output-directory=output output/thesis.tex
```

|             chapter|   words|   pages|
|--------------------|-------:|-------:|
|             0-title|       0|       0|
|          1-abstract|       0|       0|
|      2-introduction|     641|       2|
|        3-background|    3265|      13|
|        4-literature|    6801|      27|
|           5-methods|       0|       0|
|           6-results|       0|       0|
|        7-discussion|       0|       0|
|        8-conclusion|       0|       0|
|            appendix|      23|       0|
|        bibliography|       0|       0|
|               total|   10730|      42|

