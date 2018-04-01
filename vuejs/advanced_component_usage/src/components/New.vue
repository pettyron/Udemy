<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    destroyed() {
      // Without an override, dynamic components are destroyed
      console.log('Detroyed!');
    },
    // other life-cycle hooks | These can be used to react to changes in dynamic components
    deactivated() {
      console.log('Deactivated!');
    },
    activated() {
      console.log('Activated!');
    }
  }
</script>

<style lang="scss">
</style>
