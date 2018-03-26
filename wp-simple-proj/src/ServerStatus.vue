<template>
  <div> <!-- Can't put a component with siblings you can only have one root element so a wrapping div -->
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }
  }
}
</script>

<style lang="scss">
</style>
