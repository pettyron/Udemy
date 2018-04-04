<template>
  <div class="container pt-4">
    <form>
      <div class="row">
        <div class="grid-base">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text"
                   name="email"
                   id="email"
                   class="form-control"
                   v-model="userData.email">
            <!--
            What is v-model actually doing behind the scenes? Well it is this...
            _______________________________
            <input type="text"
                   name="email"
                   id="email"
                   class="form-control"
                   v-bind:value="userData.email"
                   @input="userData.email = $event.target.value">
           -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password"
                   name="password"
                   id="password"
                   class="form-control"
                   v-model.lazy="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number"
                   name="age"
                   id="age"
                   class="form-control"
                   v-model="userData.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="grid-base form-group">
          <label for="message">Message</label>
          <br>
          <textarea name="message"
                    id="message"
                    class="form-control"
                    rows="5"
                    v-model="message"
                    ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="grid-base form-group">
          <label for="sendmail">
            <input type="checkbox"
                   name="sendmail"
                   id="sendmail"
                   value="SendMail"
                   v-model="sendMail"> Send Mail
          </label>

          <label for="sendInfomail" class="pl-3">
            <input type="checkbox"
                   name="sendmail"
                   id="sendInfomail"
                   value="SendInfoMail"
                   v-model="sendMail"> Send Infomail
          </label>
        </div>
      </div>
      <div class="row">
        <div class="grid-base form-group">
          <label for="male">
            <input type="radio"
                   name="male"
                   id="male"
                   value="Male"
                   v-model="gender"> Male
          </label>
          <label for="female" class="pl-3">
            <input type="radio"
                   name="female"
                   id="female"
                   value="Female"
                   v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="grid-base form-group">
          <label for="priority">Priority</label>
          <select name="priority"
                  id="priority"
                  class="custom-select"
                  v-model="selectedPriority">
            <option v-for="priority in priorities">
              {{ priority }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="grid-base">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <div class="row">
        <div class="grid-base mb-3">
          <hr>
          <b-button variant="primary"
                    @click.prevent="submitted">Submit</b-button>
          <hr>
        </div>
      </div>
    </form>
    <div class="row mb-5 pt-0" v-if="isSubmitted">
      <div class="grid-base">
        <div class="card">
          <div class="card-header bg-light">
            <h4>Your Data</h4>
          </div>
          <div class="card-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space: pre;">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './components/Switch.vue'
  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 42
        },
        message: 'A new message...',
        sendMail: [],
        gender: 'Male',
        selectedPriority: 'High',
        priorities: ['High', 'Medium', 'Low'],
        dataSwitch: true,
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true
      }
    },
    components: {
      appSwitch: Switch
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  .grid-base {
    @extend .col;
    @extend .col-sm-8;
    @extend .offset-sm-2;
    @extend .col-md-6;
    @extend .offset-md-3;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
