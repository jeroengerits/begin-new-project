const AskProjectName = () => {
  return {
    name: 'project-name',
    message: 'what is the project name?',
    validate: (input: string) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
      else
        return 'Project name may only include letters, numbers, underscores and hashes.'
    },
  }
}

export default AskProjectName
