<template>
  <div class="home">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view name="create"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
