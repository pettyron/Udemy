<template>
  <div>
    <div id="on"
         @click="switched(true)"
         :class="{ active: value }">
      On
    </div>
    <div id="off"
         @click="switched(false)"
         :class="{ active: !value }">
      Off
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      switched(isOn) {
        this.$emit('input', isOn)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $on: on, lightgreen;
  $off: off, lightcoral;

  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  @each $key, $color in $on, $off {
    ##{$key}:hover, ##{$key}.active {
      background-color: $color;
    }
  }
</style>
