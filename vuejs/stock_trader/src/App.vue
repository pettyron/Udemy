<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style lang="scss">
body {
  padding-top: 30px;
}
</style>
