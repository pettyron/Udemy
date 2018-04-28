<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary mb-4">
    <a href="" class="navbar-brand">Ronnie Petty</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/" class="nav-item" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link>
        <router-link to="/user" class="nav-item" tag="li" active-class="active"><a class="nav-link">User</a></router-link>
      </ul>
    </div>
  </nav>
</nav>
</template>

<script>
export default {
}
</script>

<style lang="scss"></style>
