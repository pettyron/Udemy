<template>
  <div class="container">
    <div class="row">
      <div class="default-break">
        <h1>Filters &amp; Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <!-- Let's test if a Mixin updates every component or if a new instance of the object is created for every component -->
        <button class="btn btn-sm btn-primary" @click="fruits.push('Berries')">New Item</button>
        <hr>
        <input type="text"
               class="form-control"
               v-model="filterText">
        <ul class="py-3">
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue'
  import { fruitMixin } from './mixins/fruitMixin'
  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello there!'
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase()
      }
    },
    components: {
      appList: List
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
