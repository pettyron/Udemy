<template>
  <div class="container">
    <div class="row">
      <div class="default-break">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="default-break">
        <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue'
import Answer from './components/Answer.vue'
export default {
  data() {
    return {
      mode: 'app-question'
    }
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer'
      } else {
        this.mode = 'app-question'
        alert('Wrong answer, please try again!')
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>

<style lang="scss">
</style>
