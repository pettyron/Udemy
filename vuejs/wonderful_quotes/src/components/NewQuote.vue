<template>
  <div class="row">
    <form>
      <div class="newquote-breakpoints form-group">
        <label>Quote</label>
        <textarea cols="500" rows="3" class="form-control ta-width" v-model="quote"></textarea>
      </div>
      <div class="newquote-breakpoints form-group">
        <b-button variant="primary" @click="createNew">Add Quote</b-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote)
        this.quote = ''
      }
    }
  }
</script>

<style lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap';
  @import '../assets/sass/main';

  .newquote-breakpoints {
    @extend .col-12;
    @extend .col-sm-8;
    @extend .offset-sm-2;
    @extend .col-md-6;
    @extend .offset-md-3;
  }

  .ta-width {
    width: 100% !important;
    box-sizing: border-box !important;
  }
</style>
