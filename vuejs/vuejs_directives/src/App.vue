<template>
  <div class="container">
    <div class="row">
      <div class="default-break">
        <h1>Built in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="default-break">
        <h1>Custom Directives</h1>
        <p v-highlight="'orange'">Color this</p>
        <p v-highlight:background="'yellow'">Color this</p>
        <p v-highlight:background.delayed="'purple'">Color this</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'turquoise', secondColor: 'green', transitionTime: '2s', delay: 2000}">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'localHighlight': {
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor
            let secondColor = binding.value.secondColor
            let currentColor = mainColor
            el.style.transition = `all ${binding.value.transitionTime} ease-in-out`

            setTimeout(() => {
              setInterval(() => {
                currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
                if (binding.arg === 'background') {
                  el.style.backgroundColor = currentColor
                } else {
                  el.style.color = currentColor
                }
              }, binding.value.delay)
            }, delay)
          } else {
            setTimeout(() => {
              if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value.mainColor
              } else {
                el.style.color = binding.value.mainColor
              }
            }, delay)
          }
        }
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
