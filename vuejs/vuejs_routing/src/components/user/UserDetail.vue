<template>
  <div>
    <h3>Some User Details</h3>
    <p class="pb-2">User loaded has ID: {{ $route.params.id }}</p>
    <router-link tag="button"
                 :to="link"
                 class="btn btn-secondary">
      Edit Link
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('component beforeRouteEnter');
      // have to access components inside next with a function
      if (true) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style lang="scss"></style>
