import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    // Do this when you want centralized code that you want available everywhere in the application
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
