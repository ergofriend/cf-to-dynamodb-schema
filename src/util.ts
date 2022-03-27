import {readFileSync} from 'fs'

import yaml from 'js-yaml'

export const error = (text: string) => {
  console.error(`\x1b[31m${text}`)
  process.exit(1)
}

export const parse = (data: string) => {
  try {
    return JSON.parse(data)
  } catch {
    error(`failed parse template`)
  }
}

export const readFile = (path: string) => {
  const isJSON = path.endsWith('.json')
  const isYAML = path.endsWith('.yaml') || path.endsWith('.yml')
  try {
    const data = readFileSync(path, 'utf8')
    if (isJSON) return data
    if (isYAML) return JSON.stringify(yaml.load(data), null, 2)
    throw Error('not supported format.')
  } catch (err) {
    error(`failed load ${path}\n ${JSON.stringify(err)}`)
  }
  return ''
}
