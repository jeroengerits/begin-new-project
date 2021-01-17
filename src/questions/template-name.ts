import * as fs from 'fs-extra'

const TemplateName = (path: string) => {
  return {
    name: 'template-name',
    message: 'select a template',
    type: 'list',
    choices: fs.readdirSync(path).map((item) => {
      return { name: item }
    }),
  }
}

export default TemplateName
