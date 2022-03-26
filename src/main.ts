import {execSync} from 'child_process'
import {randomUUID} from 'crypto'
import {unlinkSync, writeFileSync} from 'fs'

const parse = (data: string) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    throw Error(`failed parse template: ${JSON.stringify(error)}`)
  }
}

export const parseTemplate = (data: string): string => {
  const template = parse(data)
  const resources = template.Resources
  if (!resources) throw Error('not found Resources')
  const resourcesValues = Object.values(resources)
  const table: any = resourcesValues.find(
    (v: any) => v.Type === 'AWS::DynamoDB::Table'
  )
  if (!table) throw Error('not found AWS::DynamoDB::Table')
  const properties = table.Properties
  if (!properties) throw Error('not found Properties')
  return JSON.stringify(properties, null, 2)
}

export const createTable = (schema: string) => {
  const tmpFilePath = `tmp.schema.${randomUUID()}.json`
  writeFileSync(tmpFilePath, schema)
  try {
    execSync(
      `aws dynamodb create-table --cli-input-json file://${tmpFilePath}`
    )
  } catch (error) {
    console.log(`failed aws dynamodb create-table: ${JSON.stringify(error)}`)
  }
  unlinkSync(tmpFilePath)
}
