<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

export default {
  computed: {
    ...mapGetters({ // spread operator helps us pull an object in an object and create separate key value pairs
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    })
  }
}
</script>
