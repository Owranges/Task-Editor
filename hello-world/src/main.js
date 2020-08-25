import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'  
import 'bootstrap/dist/css/bootstrap.min.css'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
