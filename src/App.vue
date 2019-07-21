<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>

      <a href="" v-if="isAuthenticated" @click.prevent="onClickLogout">Logout</a>
      <router-link to="/login" v-else>Login</router-link>
      <router-link to="/mypage">MyPage</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  import store from './store'

  export default {
    computed: {
      isAuthenticated() {
        return store.getters.isAuthenticated
      }
    },
    methods: {
      onClickLogout() {
        // LOGOUT 변이 실행 후 리다이렉트
        store.dispatch('LOGOUT').then(() => this.$router.push('/'))
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
