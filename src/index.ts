import Command from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import {
  AskProjectName,
  SelectTemplate,
  SelectTemplateProvider,
} from './questions'

class BeginNewProject extends Command {
  async run() {
    const initAnswers = await inquirer.prompt([
      AskProjectName(),
      SelectTemplateProvider(),
    ])

    switch (initAnswers['template-provider']) {
      case 'default':
        const secondAnswers = await inquirer.prompt([
          SelectTemplate(`${__dirname}/../templates`),
        ])

        const projectPath = `${process.cwd()}/${initAnswers['project-name']}`

        fs.ensureDir(projectPath)
          .then(() => {
            fs.copy(
              `${__dirname}/../templates/${secondAnswers['template-name']}`,
              projectPath,
            )
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
