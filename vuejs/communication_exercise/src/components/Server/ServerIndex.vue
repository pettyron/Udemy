<template>
  <li
    class="list-group-item"
    style="cursor: pointer">
      <div class="row">
        <div class="col-md-8">
          Server Number: {{ server.id }}
        </div>
        <div class="col-md-4">
          <button class="btn btn-info btn-sm" @click="indexSelect">Select this Server</button>
        </div>
      </div>
  </li>
</template>

<script>
  import { outputBus } from '../../main'
  export default {
    props: {
      server: Object
    },
    methods: {
      indexSelect() {
        outputBus.$emit('serverSelect', this.server)
      }
    }
  }
</script>

<style lang="css"></style>
