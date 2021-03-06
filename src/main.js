import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import iconSet from 'quasar-framework/icons/fontawesome'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/fontawesome'
import Quasar, * as All from 'quasar'

Vue.use(Quasar, {
  iconSet: iconSet,
  components: All,
  directives: All,
  plugins: All
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
