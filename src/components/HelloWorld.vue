<template>
  <!--<NavbarComp/>-->
  <CreateComp/>
  <ReadComp/>
  <deleteComp/>
</template>

<script>
//import NavbarComp from './Navbar.vue';
import CreateComp from '../components/Todos/Create.vue'
import ReadComp from '../components/Todos/Read.vue'
import deleteComp from '../components/Todos/Delete.vue'


export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: { CreateComp, ReadComp, deleteComp }
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
