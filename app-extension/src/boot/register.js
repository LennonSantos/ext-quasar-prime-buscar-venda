import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-ext-quasar-prime-buscar-venda'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
