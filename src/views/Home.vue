<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Home</h2>
    <div>{{ greeting }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  date() {
    return {
      greeting: ''
    }
  },
  created() {
    axios.get('http://localhost:8088/home')
      .then(result => this.greeting = result.data.greeting)
  }
};
</script>
