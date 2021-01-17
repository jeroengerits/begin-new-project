import Command from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import {ProjectName, TemplateName, TemplateProvider} from "./questions";

class BeginNewProject extends Command {
  async run() {
    const initAsked = await inquirer.prompt([
      ProjectName(),
      TemplateProvider(),
    ])

    switch (initAsked['template-provider']) {
      case 'default':
        const templatesPath = `${__dirname}/../templates`
        const templateAsked = await inquirer.prompt([
          TemplateName(templatesPath),
        ])
        const templatePath = `${__dirname}/../templates/${templateAsked['template-name']}`
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
