import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Directives have 5 hooks:
// bind(el, binding, vnode) - Once the directive is attached | vnode = virtual node
// inserted(el, binding, vnode) - Inserted in Parent Node
// update(el, binding, vnode, oldNode) - Once component is updated without children
// componentUpdated(el, binding, vnode, oldNode) - Once Component is Updated with children
// unbind(el, binding, vnode) - Once directive is removed
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value // binding is the binding and value is what is entered inside quotes
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
