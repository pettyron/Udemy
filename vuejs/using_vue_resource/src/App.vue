<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>HTTP</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <br>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <div class="py-2">
          <input type="text" class="form-control" v-model="node">
        </div>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group mt-3">
          <li class="list-group-item" v-for="u in users">{{ u.username }} &ndash; {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
        // this.$http.post('data.json', this.user)
        //   .then(response => {
        //     console.log(response)
        //   }, error => {
        //     console.log(error)
        //   })
        // this.resource.save({}, this.user)
        this.resource.saveAlt(this.user)
      },
      fetchData() {
        // this.$http.get('data.json')
        //   .then(response => {
        //     return response.json()
        //   })
        //   .then(data => {
        //     const resultArray = []
        //     for (let key in data) {
        //       resultArray.push(data[key])
        //     }
        //     this.users = resultArray
        //   })
        this.resource.getData({node: this.node})
          .then(response => {
            return response.json()
          })
          .then(data => {
            const resultArray = []
            for (let key in data) {
              resultArray.push(data[key])
            }
            this.users = resultArray
          })
      }
    },
    created() {
      const customActions = {
        saveAlt: {
          method: 'POST',
          url: 'alternative.json'
        },
        getData: {
          method: 'GET'
        }
      }
      this.resource = this.$resource('{node}.json', {}, customActions)
    }
  }
</script>

<style lang="scss"></style>
