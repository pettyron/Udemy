<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <app-server-id
            v-for="server in servers"
            :server="server"
          ></app-server-id>
        </ul>
    </div>
</template>

<script>
  import ServerIndex from './ServerIndex.vue'
  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Busy' },
          { id: 4, status: 'Unavailable' },
          { id: 5, status: 'Unreachable' }
        ]
      }
    },
    components: {
      appServerId: ServerIndex
    }
  }
</script>

<style>

</style>
