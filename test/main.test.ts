import {parseTemplate} from '../src/main'

import testTemplate from './templates/test.template.json'
import teatSchema from './schema/test.json'

test('parseTemplate', () => {
  const template = JSON.stringify(testTemplate)
  const result = JSON.parse(parseTemplate(template))
  expect(result).toStrictEqual(teatSchema)
})
