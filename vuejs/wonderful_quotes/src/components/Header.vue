<template>
  <div class="row my-4">
    <div class="col">
      <h3>Quote Added</h3>
      <div>
        <b-progress>
          <b-progress-bar :value="(quoteCount / maxQuotes) * 100">{{ quoteCount }} / {{ maxQuotes }}</b-progress-bar>
        </b-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quoteCount', 'maxQuotes'],

  }
</script>

<style lang="scss">
</style>
