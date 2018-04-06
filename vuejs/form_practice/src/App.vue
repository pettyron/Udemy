<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form>
          <app-full-name v-model="signup.fullName"></app-full-name>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="">Email</label>
              <input type="email"
                     class="form-control form-control-sm"
                     v-model="signup.email">
            </div>
            <div class="form-group col-md-6">
              <label for="">Password</label>
              <input type="password"
                     class="form-control form-control-sm"
                     v-model="signup.password">
            </div>
          </div>
          <div class="form-row pl-2">
            <header>
              <h5>Store Data?</h5>
            </header>
          </div>
          <div class="form-row pl-2">
            <div class="form-group">
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="yes">
                  <input type="radio"
                         class="form-check-input"
                         name="yes"
                         value="yes"
                         v-model="signup.storeData">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="no">
                  <input type="radio"
                         class="form-check-input"
                         name="no"
                         value="no"
                         v-model="signup.storeData">
                  No
                </label>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-12">
              <hr>
              <b-button variant="primary"
                        @click.prevent="submitted()">
                Submit
              </b-button>
              <hr>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row" v-if="isSubmitted">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>User Signup Information</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Full Name: {{ signup.fullName }}</li>
            <li class="list-group-item">Email: {{ signup.email }}</li>
            <li class="list-group-item">Password: {{ signup.password }}</li>
            <li class="list-group-item">Store Data? {{ signup.storeData | capitalize }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullName from './components/FullName.vue'
  export default {
    data() {
      return {
        signup: {
          firstName: '',
          lastName: '',
          fullName: '',
          email: '',
          password: '',
          storeData: 'yes'
        },
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true
      }
    },
    components: {
      appFullName: FullName
    },
    filters: {
      capitalize: (value) => {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  body {
    padding: 1em 0;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .input {
    &-sm {
      @extend .form-control;
      @extend .form-control-sm;
    }
  }
</style>
