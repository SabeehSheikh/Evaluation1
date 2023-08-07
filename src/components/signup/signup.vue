<template>
    <v-container>
  
    
      
          <v-sheet align-self="center" max-width="300" class="mx-auto">
      
        <h1>Signup Page</h1>
         <v-form action="" validate-on="submit lazy">
      <!--<label >Username</label>-->
      <v-text-field  label="Username" required v-model="form.username"></v-text-field>
      <!--<input type="text">-->
      <!--<label >Email</label>-->
      <v-text-field type="email" label="Email" required v-model="form.email"></v-text-field>
      <!--<input type="email" required v-model="form.email">-->
      <!--<label >Password</label>-->
      <v-text-field type="password" label="Password" required v-model="form.password"></v-text-field>
      <!--<input type="password" required v-model="form.password">-->
      <!--<label >Confirm Passwword</label>-->
      <v-text-field type="password" label="Confirm Password" required v-model="form.confirm_password"></v-text-field>
      <!--<input type="password" required v-model="form.confirm_password">-->
      <v-btn class="bg-sky-500 hover:bg-sky-700 ..." @click="validateSignupForm(this.form.email,this.form.password)" text="submit"></v-btn>
      <!--<button @click="validateSignupForm(this.form.email,this.form.password)">Signup</button>-->
     
    
  </v-form>
  </v-sheet>
  
  </v-container>
  </template>
  
  <!--<template>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Name"
        ></v-text-field>
    
        <v-text-field
          v-model="phone.value.value"
          :counter="7"
          :error-messages="phone.errorMessage.value"
          label="Phone Number"
        ></v-text-field>
    
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
        ></v-text-field>
        
        <v-text-field
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          label="Password"
        ></v-text-field>
    
        
    
        <v-checkbox
          v-model="checkbox.value.value"
          :error-messages="checkbox.errorMessage.value"
          value="1"
          label="Option"
          type="checkbox"
        ></v-checkbox>
    
        <v-btn
          class="me-4"
          type="submit"
        >
          submit
        </v-btn>
    
        <v-btn @click="handleReset">
          clear
        </v-btn>
      </form>
    </template>
  
  
    <script setup>
     
      import { useField, useForm } from 'vee-validate'
    
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true
    
            return 'Name needs to be at least 2 characters.'
          },
          phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true
    
            return 'Phone number needs to be at least 9 digits.'
          },
          email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
    
            return 'Must be a valid e-mail.'
          },
          password (value) {
              if (value?.length > 9 && /[0-9-]+/.test(value)) return true
    
            return 'Must be a valid password.'
          },
          
          checkbox (value) {
            if (value === '1') return true
    
            return 'Must be checked.'
          },
        },
      })
      
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const password = useField('password')
      
      const checkbox = useField('checkbox')
    
    
      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })
     
    </script>
   -->
  <script>
  export default {
    name: 'signupPage',
   
    data() {
      return {
       form:{
          username:'',
          email:'',
          password:'',
          confirm_password:'',
  
       },
       errors:[],
  
      }
    },
    computed: {
     
  
    },
    methods: {
  
      validateSignupForm(){
  
        localStorage.setItem('email',this.form.email);
        localStorage.setItem('password',this.form.password);
        console.log(this.form.email);
        console.log(this.form.password);
        if (this.form.password.length > 8 && this.form.confirm_password.length > 8 
        && this.form.password==this.form.confirm_password)
        {
          this.navigateToLoginPage()
        }
      
      },
      navigateToLoginPage(){
          this.$router.push('/');
  
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