import {Command} from 'commander'

const program = new Command()

program
  .name('gen-dynamo-schema-from-cdk')
  .description('CLI to generate create-table json from aws cdk')
  .version('0.0.0')

program
  .command('create-table')
  .description(
    'Run aws dynamodb create-table from cdk.out.file'
  )
  .argument('<string>', 'template.json path')
  .option('-f, --fiel', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined
    console.log(str.split(options.separator, limit))
  })

program.parse()
