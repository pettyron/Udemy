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
    border-color: $success;
    background-color: transparentize($success, 0.6);

    &-header {
      background-color: $success;
      color: transparentize($light, 0.3);
    }
    &-body {
      color: darken($success, 15%);
    }
  }
</style>
