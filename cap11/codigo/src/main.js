import Vue from 'vue'
import App from './App.vue'

import VDiretiva from './diretiva'
Vue.directive('soma', VDiretiva)

import Plugin from './plugin'
Vue.use(Plugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
