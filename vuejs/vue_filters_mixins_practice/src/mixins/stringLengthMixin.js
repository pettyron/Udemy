export const stringLengthMixin = {
  data() {
    return {
      text: 'Honorificabilitudinitatibus'
    }
  },
  computed: {
    stringLengthComputed() {
      return `${this.text} (${this.text.length})`
    }
  }
}
