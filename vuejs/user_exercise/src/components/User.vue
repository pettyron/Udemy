<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p class="pt-3">Name is: {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age">
        </app-user-detail><!-- v-bind is needed to make props dynamic -->
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data() {
    return {
      name: 'Ron',
      age: 42
    }
  },
  methods: {
    changeName() {
      this.name = 'Jeanne'
    },
    // for callback style parent-child relationship
    resetName() {
      this.name = 'Ron'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
.pt-3 {
  padding-top: 0.33em;
}
</style>
