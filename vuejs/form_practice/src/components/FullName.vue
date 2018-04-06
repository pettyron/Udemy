<template>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="">First Name</label>
      <input type="text"
             class="form-control form-control-sm"
             @input="updateFullName(true, $event)"
             :value="firstName">
    </div>
    <div class="form-group col-md-6">
      <label for="">Last Name</label>
      <input type="text"
             class="form-control form-control-sm"
             @input="updateFullName(false, $event)"
             :value="lastName">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      updateFullName(initial, event) {
        let name = ''
        if (initial) {
          name = `${event.target.value} ${this.lastName}`
        } else {
          name = `${this.firstName} ${event.target.value}`
        }
        this.value = name
        this.$emit('input', this.value)
      }
    },
    computed: {
      firstName() {
        return this.value.split(' ')[0]
      },
      lastName() {
        return this.value.split(' ')[1]
      }
    }
  }
</script>

<style lang="scss"></style>
