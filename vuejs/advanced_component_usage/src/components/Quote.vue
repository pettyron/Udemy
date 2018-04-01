<template>
  <div>
    <!-- <p>{{ quote }}</p> -->
    <!-- An unnamed slot is treated as a default slot -->
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #999"><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr>
    <!-- <div>
      <slot name="content"></slot>
    </div> -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    // props: ['quote']
  }
</script>

<style lang="scss" scoped>
// Styles are scoped to the child with slots
  div {
    border: 1px solid #ccc;
    border-radius: 0.5em;
    box-shadow: 1px 1px 2px lighten(#000, 60%);
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2 {
    color: #99c2ff;
  }
  .title {
    font-style: italic;
  }
</style>
