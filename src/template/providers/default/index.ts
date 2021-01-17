import { Provider } from '../../index'
import * as fs from 'fs'

/*
 * The default template source is the 'templates' folder in the 'begin-new-project' repository
 */

type DefaultTemplateProviderProperties = Provider

const DefaultTemplateProvider = (): DefaultTemplateProviderProperties => ({
  getTemplates(): {} {
    return fs.readdirSync(`${__dirname}/../templates`).map((item) => {
      return { name: item }
    })
  },
})

export default DefaultTemplateProvider
