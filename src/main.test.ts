import {parseTemplate} from './main'

import testTemplate from './test-data/templates/test.template.json'
import teatSchema from './test-data/schema/test.json'
import {readFile} from './util'

describe('support formats', () => {
  describe.each([['json'], ['yaml'], ['yml']])('.%s', format => {
    test('readFile', () => {
      const filename = `./src/test-data/templates/test.template.${format}`
      const data = readFile(filename)
      const result = JSON.parse(parseTemplate(data))
      expect(result).toStrictEqual(teatSchema)
    })
  })
})

test('parse template', () => {
  const template = JSON.stringify(testTemplate)
  const result = JSON.parse(parseTemplate(template))
  expect(result).toStrictEqual(teatSchema)
})
