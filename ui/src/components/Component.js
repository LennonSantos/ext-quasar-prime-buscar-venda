import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'PrimeBuscarVenda',

  setup () {
    return () => h(QBadge, {
      class: 'PrimeBuscarVenda',
      label: 'PrimeBuscarVenda'
    })
  }
}
