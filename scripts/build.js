#!/usr/bin/env node
const {build} = require('estrella')
const {Generator} = require('npm-dts')

build({
  entry: 'src/main.ts',
  outfile: 'dist/main.js',
  bundle: true,
  minify: true,
  format: 'cjs'
})

new Generator({
  entry: 'src/main.ts',
  output: 'dist/main.d.ts',
}).generate()
