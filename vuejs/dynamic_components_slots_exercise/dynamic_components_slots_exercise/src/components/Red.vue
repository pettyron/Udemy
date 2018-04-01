<template>
  <div class="card">
    <header class="card-header">
      <h2><slot name="title"></slot></h2>
    </header>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/bootstrap/scss/bootstrap';
  .card {
    border-color: $danger;
    background-color: transparentize($danger, 0.6);

    &-header {
      background-color: $danger;
      color: transparentize($light, 0.3);
    }
    &-body {
      color: darken($danger, 15%);
    }
  }
</style>
