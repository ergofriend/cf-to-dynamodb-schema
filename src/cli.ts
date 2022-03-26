import {readFileSync, writeFileSync} from 'fs'

import {Command} from 'commander'

import {createTable, parseTemplate} from './main'
import {error, readFile} from './util'

const program = new Command()
const argument = 'cdk.out/*.template.json path'

program
  .name('gen-dynamo-schema')
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
  .action(t => {
    const template = readFile(t)
    if (!template) return
    const parsed = parseTemplate(template)
    createTable(parsed)
  })

program.parse()
