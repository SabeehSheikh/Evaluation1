
<template>
    <v-container>
        
        <v-form >
            <v-sheet align-self="center" max-width="300" class="mx-auto">
   
        
    
   
    <v-text-field type="text" label="Title" required v-model="form.title"></v-text-field>
    
  
    <v-text-field type="text" label="Description" required v-model="form.des"></v-text-field>
    <v-text-field type="text" label="Id" required v-model="form.id"></v-text-field>
   
    <!--<p property="disable" v-if="errors" style="color: red;"> {{errors}} </p>-->
   
    <v-btn class="bg-sky-500 hover:bg-sky-700 ..." @click="validateField(form)">Create</v-btn>
    
   
 



</v-sheet>
</v-form>
</v-container>
</template>
 
<script>
import { mapActions } from 'vuex';
export default {
  name: 'CreateComp',
 
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
   

  },
  methods: {

    ...mapActions({validateField:'setDataFromLocalStorage'}),
   
    //         validateField(){

    //                localStorage.setItem('title',this.form.title)
    //                localStorage.setItem('des',this.form.des)
    //                localStorage.setItem('id',this.form.id)
                    
                    
    //},
   
   
   
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