import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/main.scss'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
