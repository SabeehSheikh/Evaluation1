
<template>
    <v-container>
        
        <v-form >
            <v-sheet align-self="center" max-width="300" class="mx-auto">
   
        
    
 
    <v-text-field type="text" label="Id" required v-model="form.id"></v-text-field>
   
    <!--<p property="disable" v-if="errors" style="color: red;"> {{errors}} </p>-->
   
    <v-btn class="bg-sky-500 hover:bg-sky-700 ..." @click="validateField(form.id)">Delete Data</v-btn>


    {{ showData }}
    
   
 



</v-sheet>
</v-form>
</v-container>
</template>
 
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'deleteComp',
 
  data() {
    return {
      
     form:{
        
        title:'',
        des:'',
        id:'',
        

     },
     

    };
  },
  computed: {
    ...mapGetters({showData:'getData'}),
   

  },
  methods: {

    ...mapActions({validateField:'deleteData'}),
   
      
    
   
   
   
  },
  created() {

  },
  mounted(){
   
  },
  updated() {
    
  },
  unmounted() {
    
  },
}
</script>