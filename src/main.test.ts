import {parseTemplate} from './main'

import testTemplate from './test-data/templates/test.template.json'
import teatSchema from './test-data/schema/test.json'

test('parseTemplate', () => {
  const template = JSON.stringify(testTemplate)
  const result = JSON.parse(parseTemplate(template))
  expect(result).toStrictEqual(teatSchema)
})
