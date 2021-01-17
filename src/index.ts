import Command from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import AskProjectName from './questions/ask-project-name'
import AskTemplateProvider from './questions/ask-template-provider'
import AskTemplate from './questions/ask-template'

class BeginNewProject extends Command {
  async run() {
    const initAsked = await inquirer.prompt([
      AskProjectName(),
      AskTemplateProvider(),
    ])

    switch (initAsked['template-provider']) {
      case 'default':
        const templatesPath = `${__dirname}/../templates`
        const templateAsked = await inquirer.prompt([
          AskTemplate(templatesPath),
        ])
        const templatePath = `${__dirname}/../templates/${templateAsked['template']}`
        const projectPath = `${process.cwd()}/${initAsked['project-name']}`
        fs.ensureDir(projectPath)
          .then(() => {
            fs.copy(templatePath, projectPath)
              .then(() => console.log(`\n ✌️`))
              .catch((err) => console.error(err))
          })
          .catch((err) => {
            console.error(err)
          })
    }
  }
}

export = BeginNewProject
