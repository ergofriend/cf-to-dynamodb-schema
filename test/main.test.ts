import {parseTemplate} from '../src/main'

import testTemplate from './templates/test.template.json'
import teatSchema from './schema/test.json'

test('parseTemplate', () => {
  expect(parseTemplate(testTemplate)).toStrictEqual(teatSchema)
})
