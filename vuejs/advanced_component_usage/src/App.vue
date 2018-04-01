<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <!-- Pass with Props | the suboptimal solution -->
        <!-- <app-quote quote="A wonderful quote!"></app-quote> -->
        <!-- Let's use slots -->
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <!-- Dynamic Component -->
        <keep-alive> <!-- keep alive bypasses the destroy life-cycle hook -->
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
        <!-- Old slots method -->
        <!-- <app-quote> -->
          <!-- Here in the parent is where we can manipulate data to the slot -->
          <!-- In short styles happen on the child, everything else on the parent -->
          <!-- <h2 slot="title">{{ quoteTitle }}</h2> -->
          <!-- <p>A wonderful quote</p> -->
        <!-- </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import Author from './components/Author.vue'
  import New from './components/New.vue'
  export default {
    data() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      // dynamic components
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style lang="scss">
</style>
