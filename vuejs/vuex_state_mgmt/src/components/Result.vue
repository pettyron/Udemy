<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

export default {
  computed: {
    ...mapGetters({ // spread operator helps us pull an object in an object and create separate key value pairs
      counter: types.DOUBLE_COUNTER
    })
  }
}
</script>
