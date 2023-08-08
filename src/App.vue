<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</nav>-->
<Navbar v-if="!isRootRoute && !isSignupRoute" />

  <router-view/>
  
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
    name: 'App',
    components: {
        Navbar
    },
    computed: {
    isRootRoute() {
      // Check if the current route is the root route ("/")
      return this.$route.path === '/';
    },
    isSignupRoute() {
      // Check if the current route is the root route ("/")
      return this.$route.path === '/signup';
    },
  },
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
