import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-dsl-name-a'
import { sayHello } from 'quasar-ui-design-system'

export default boot(({ app }) => {
  sayHello('name-a')
  app.use(VuePlugin)
})
