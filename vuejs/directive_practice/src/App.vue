<template>
  <div class="container">
    <div class="row">
      <div class="default-break">
        <h1>Custom Directive</h1>
      </div>
    </div>
    <div class="row py-4">
      <div class="form-group default-break">
        <label>Enter Your Name</label>
        <input class="form-control form-control-sm" type="text" v-model="person.name">
      </div>
    </div>
    <div class="row">
      <div class="default-break">
        <button v-now-hear-this:click="sayHello" class="btn btn-success">Do Something</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        person: {
          name: ''
        }
      }
    },
    directives: {
      nowHearThis: {
        bind(el, binding, vnode) {
          el.addEventListener(binding.arg, binding.value)
        }
      }
    },
    methods: {
      sayHello() {
        if (this.$data.person.name === null || this.$data.person.name === undefined || this.$data.person.name === '') {
          this.$data.person.name = 'Friend'
        }
        alert(`Hello there ${this.$data.person.name}`)
      }
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  .default-break {
    @extend .col-12;
    @extend .col-sm-8;
    @extend .offset-sm-2;
    @extend .col-md-6;
    @extend .offset-md-3;
  }
</style>
