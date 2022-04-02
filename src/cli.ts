#!/usr/bin/env node
import {writeFileSync} from 'fs'

import {Command} from 'commander'

import {createTable, parseTemplate} from './main'
import {readFile} from './util'

const program = new Command()
const argument = 'template path'

program
  .name('cf-to-dynamodb-schema')
  .description('CLI to generate create-table json from aws cdk')
  .version('0.0.0')

program
  .command('parse-template')
  .description(
    'Output json for exec aws dynamodb create-table from cdk.out.file'
  )
  .argument(argument)
  .option(
    '-o, --output <string>',
    'output file path for table schema json'
  )
  .action((t, {output}) => {
    const template = readFile(t)
    if (!template) return
    const parsed = parseTemplate(template)
    if (output) {
      writeFileSync(output, parsed)
    } else {
      console.log(parsed)
    }
  })

program
  .command('create-table')
  .description('Run aws dynamodb create-table from cdk.out.file')
  .argument(argument)
  .option(
    '-e, --endpoint <string>',
    'endpoint url of dynamodb. (e.g. http://localhost:8000)'
  )
  .option(
    '-p, --profile <string>',
    'profile name of aws configure. (e.g. localstack)'
  )
  .action((t, {profile, endpoint}) => {
    const template = readFile(t)
    if (!template) return
    const parsed = parseTemplate(template)
    createTable(parsed, profile, endpoint)
  })

program.parse()
