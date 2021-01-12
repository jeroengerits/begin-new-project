import Command from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'

class BeginNewProject extends Command {
  async run() {
    const questions = [
      {
        name: 'template',
        message: 'select a template',
        type: 'list',
        choices: fs.readdirSync(`${__dirname}/../templates`).map((item) => {
          return { name: item }
        }),
      },
      {
        name: 'project',
        message: 'project name',
        validate: (input: string) => {
          if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
          else
            return 'Project name may only include letters, numbers, underscores and hashes.'
        },
      },
    ]
    const answers = await inquirer.prompt(questions)
    const templatePath = `${__dirname}/../templates/${answers['template']}`
    const projectPath = `${process.cwd()}/${answers['project']}`
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

export = BeginNewProject
