
<template>
    <v-container>
        <h1 class="text-blue-500">Login Page</h1>
        <v-form v-if="isValidform">
            <v-sheet align-self="center" max-width="300" class="mx-auto">
   
        
    
   
    <v-text-field type="email" label="Email" required v-model="form.email"></v-text-field>
    
  
    <v-text-field type="password" label="Password" required v-model="form.password"></v-text-field>
   
    <!--<p property="disable" v-if="errors" style="color: red;"> {{errors}} </p>-->
   
    <v-btn class="bg-sky-500 hover:bg-sky-700 ..." @click="validateLoginForm()">Login</v-btn>
    <v-btn class="bg-sky-500 hover:bg-sky-700 ..." @click="navigateToSignup()">Signup</v-btn>
   
 



</v-sheet>
</v-form>
</v-container>
</template>
 
<script>
export default {
  name: 'loginPage',
 
  data() {
    return {
      isValidform:true,
     form:{
        errors:'',
        email:'',
        password:'',
        

     },
     errors:{},

    };
  },
  computed: {
   

  },
  methods: {
    validateLoginForm(){
    this.errors={};
    if(this.form.email!=null && this.form.password.length>8)
    {this.navigateToTodos()
   
  }

    else
    this.errors="please enter valid email and password"
    
    
    },
    navigateToSignup(){
      this.$router.push('/signup');

        
    },
    navigateToTodos(){
    //  if(errors.length>0 ){
    //    errors.push("Please resolve the error");
        //console.log(errors);
    //  }
      if(this.form.email==localStorage.getItem('email') && this.form.password==localStorage.getItem('password')){
        this.$router.push('/home');
       
      }
    },
   
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