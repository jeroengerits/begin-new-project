import * as fs from 'fs-extra'

const AskTemplate = (path: string) => {
  return {
    name: 'template',
    message: 'select a template',
    type: 'list',
    choices: fs.readdirSync(path).map((item) => {
      return { name: item }
    }),
  }
}

export default AskTemplate
