<template>
  <div>
    <h1 class="pb-3">Filters &amp; Mixins</h1>
    <input type="text"
           class="form-control"
           v-model="filterText">
    <ul class="py-3">
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  import { fruitMixin } from '../mixins/fruitMixin'
  export default {
    mixins: [fruitMixin],
    created() {
      console.log('Inside List.vue Created Hook');
    }
  }
</script>

<style lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap';
  .default-break {
    @extend .col-12;
    @extend .col-sm-8;
    @extend .offset-sm-2;
    @extend .col-md-6;
    @extend .offset-md-3;
  }
</style>
