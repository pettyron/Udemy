<template>
  <div>
    <router-view name="header-default"></router-view>
    <router-view name="header-user"></router-view>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Routing</h1>
          <hr>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss">
.fade-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
}
</style>
