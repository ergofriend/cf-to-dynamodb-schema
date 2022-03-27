import {readFileSync} from 'fs'

import type {Template} from 'cloudform-types'

export const error = (text: string) => {
  console.error(`\x1b[31m${text}`)
  process.exit(1)
}

export const parse = (data: string) => {
  try {
    return JSON.parse(data) as Template['Resources']
  } catch {
    error(`failed parse template`)
  }
}

export const readFile = (path: string) => {
  try {
    return readFileSync(path, 'utf8')
  } catch {
    error(`failed load ${path}`)
  }
}
