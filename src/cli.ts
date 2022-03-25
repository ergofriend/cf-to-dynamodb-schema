import {Command} from 'commander'
import { readFileSync, writeFileSync } from 'fs'
import { createTable, parseTemplate } from './main'

const program = new Command()

program
  .name('gen-dynamo-schema')
  .description('CLI to generate create-table json from aws cdk')
  .version('0.0.0')

program
  .command('parse-template')
  .description(
    'Output json for exec aws dynamodb create-table from cdk.out.file'
  )
  .requiredOption('-t --template <string>', 'template.json data')
  .option('-o --output-path <string>', 'output file path for table schema json')
  .action(async ({t,o}) => {
    const parsed = parseTemplate(t)
    if (o) {
      writeFileSync(o, parsed)
    } else {
      console.log(parsed)
    }
  })

program
  .command('create-table')
  .description(
    'Run aws dynamodb create-table from cdk.out.file'
  )
  .requiredOption('-t --template <string>', 'template.json data')
  .action(async ({t}) => {
    const template = await readFileSync(t, 'utf8')
    const parsed = parseTemplate(template)
    createTable(parsed)
  })

program.parse()
