<template>
  <div class="container">
    <div class="row">
      <div class="default-break">
        <h3>{{ dcVillain.superman }}</h3>
        <h3>{{ dcVillain.superman | reverseText }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="default-break">
        <p>{{ longText | stringLength }}</p>
      </div>
    </div>
    <div class="row">
      <div class="default-break">
        <h3>{{ dcVillain.batman }}</h3>
        <h3>{{ reverseTextComputed }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="default-break">
        <p>{{ stringLengthComputed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { stringLengthMixin } from './mixins/stringLengthMixin'
  export default {
    mixins: [stringLengthMixin],
    data() {
      return {
        dcVillain: {
          superman: 'Mxyzptlk',
          batman: 'Riddler'
        },
        longText: 'Sesquipedalian'
      }
    },
    computed: {
      reverseTextComputed() {
        return this.dcVillain.batman.split('').reverse().join('')
      }
    },
    filters: {
      reverseText(value) {
        return value.split('').reverse().join('');
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
