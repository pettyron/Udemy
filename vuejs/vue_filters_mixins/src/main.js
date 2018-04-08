import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase()
})

// Usually the only time you want to use a global Mixin is for creating a 3rd party plugin | USE WITH CAUTION
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
})

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
