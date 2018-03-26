import Vue from 'vue'
import App from './App.vue'
import Header from './components/shared/Header.vue'
import AppServers from './components/AppServers.vue'
import Footer from './components/shared/Footer.vue'

Vue.component('status-header', Header)
Vue.component('app-servers', AppServers)
Vue.component('status-Footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
