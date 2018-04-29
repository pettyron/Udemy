<template>
  <div class="container">
    <div class="row">
      <div class="break-default">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <br>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value" class="form-control">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import AnotherCounter from './components/AnotherCounter.vue'
import Result from './components/Result.vue'
import AnotherResult from './components/AnotherResult.vue'

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value
      },
      set(value) {
        this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value)
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap/scss/bootstrap-grid';
@import '../node_modules/bootstrap/scss/bootstrap-reboot';

.break-default {
  @extend .col-sm-8;
  @extend .offset-sm-2;
  @extend .col-md-6;
  @extend .offset-md-3;
}
</style>
