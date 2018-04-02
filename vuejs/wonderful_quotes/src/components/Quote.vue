<template>
  <div class="base-breakpoints">
    <div class="card">
      <div class="card-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap';
  @import '../assets/sass/main';
  .base-breakpoints {
    @extend .col-sm-6;
    @extend .col-md-4;
    @extend .col-lg-3;
  }
  .card-body {
    font-family: $arizonia;
    font-size: 24px;
    color: #6e6e6e;
  }

  .quote {
    cursor: pointer;

    &:hover {
      background-color: #ffe2e2;
    }
  }
</style>
