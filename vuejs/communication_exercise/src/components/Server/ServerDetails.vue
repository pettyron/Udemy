<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server Number: {{ server.id }} is selected, Server Status is: {{ server.status }}</p>
        <button class="btn btn-primary btn-sm" @click="revertServer">Revert Server</button>
    </div>

</template>

<script>
  import { outputBus } from '../../main'
  export default {
    data() {
      return {
        server: null
      }
    },
    methods: {
      revertServer() {
        this.server.status = 'Normal'
      }
    },
    created() {
      outputBus.$on('serverSelect', (server) => {
        this.server = server
      })
    }
  }
</script>

<style>
</style>
