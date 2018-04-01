<template>
  <div class="card">
    <header class="card-header">
      <slot name="title"></slot>
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
    border-color: $primary;
    background-color: transparentize($primary, 0.6);

    &-header {
      background-color: $primary;
      color: transparentize($light, 0.2);
    }
    &-body {
      color: darken($primary, 15%);
    }
  }
</style>
