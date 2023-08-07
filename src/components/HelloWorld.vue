<template>
  <NavbarComp/>
  <CreateComp/>
  <ReadComp/>
</template>

<script>
import NavbarComp from './Navbar.vue';
import CreateComp from '../components/Todos/Create.vue'
import ReadComp from '../components/Todos/Read.vue'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: { NavbarComp, CreateComp, ReadComp }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
