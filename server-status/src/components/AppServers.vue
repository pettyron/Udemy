<template>
  <div>
    <app-server-status></app-server-status>
    <app-server-details></app-server-details>
    <hr>
  </div>
</template>

<script>
import ServerStatus from './server/ServerStatus.vue'
import ServerDetails from './server/ServerDetails.vue'
export default {
  components: {
    'app-server-status': ServerStatus,
    'app-server-details': ServerDetails
  }
}
</script>

<style lang="css">
</style>
