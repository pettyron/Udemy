// A mixin is not shared it is not in the same place in memory but replicated. Each component gets a fresh copy
// If you want to effect everything you can use an Event Bus as an option
export const fruitMixin = {
  data() {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  // Use a computed property to do more performance dependant filtering i.e. more complex transformations
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText) // this match is case sensitive
      })
    }
  },
  created() {
    console.log('Created')
  }
}
