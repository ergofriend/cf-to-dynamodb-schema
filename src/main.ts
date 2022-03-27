import {execSync} from 'child_process'
import {randomUUID} from 'crypto'
import {unlinkSync, writeFileSync} from 'fs'

import {error, parse} from './util'

export const parseTemplate = (data: string): string => {
  const template = parse(data)
  const resources = template.Resources
  if (!resources) error('not found Resources')
  const resourcesValues = Object.values(resources)
  const table: any = resourcesValues.find(
    (v: any) => v.Type === 'AWS::DynamoDB::Table'
  )
  if (!table) error('not found AWS::DynamoDB::Table')
  const properties = table.Properties
  if (!properties) error('not found Properties')
  return JSON.stringify(properties, null, 2)
}

export const createTable = (
  schema: string,
  profile?: string,
  endpoint?: string
) => {
  const tmpFilePath = `tmp.schema.${randomUUID()}.json`
  writeFileSync(tmpFilePath, schema)
  try {
    const base = `aws dynamodb create-table --cli-input-json file://${tmpFilePath}`
    const e = endpoint ? `--endpoint-url ${endpoint}` : ''
    const p = profile ? `--profile=${profile}` : ''
    execSync(`${base} ${e} ${p}`)
  } catch {
    unlinkSync(tmpFilePath)
    error('failed aws dynamodb create-table')
  }
  unlinkSync(tmpFilePath)
}
