import {execSync} from 'child_process'

const parse = (data: string) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    throw Error('failed parse template')
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
  execSync(`aws dynamodb create-table --cli-input-json ${schema}`)
}
