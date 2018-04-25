import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueResource, BootstrapVue)

Vue.http.options.root = 'https://vuejs-http-a79a0.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    // don't do this in a production app
    response.json = () => { return {messages: response.body} }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
