<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button> <!-- for callback style parent-child relationship -->
    </div>
</template>

<script>
  import { eventBus } from '../main'
  // props allows passing data from parent to child
  export default {
    props: {
      myName: {
        type: String,
        default: 'Ron'
      },
      // for callback style parent-child relationship
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split('').reverse().join('')
      },
      resetName() {
        this.myName = 'Ron'
        this.$emit('nameWasReset', this.myName) // emits a custom event
      }
    },
    // created hook is for the eventBus
    created() {
      eventBus.$on('ageWasEdited', (age) => this.userAge = age)
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
