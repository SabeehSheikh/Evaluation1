//import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    //user: {},
    
    data:[],
    
  },
  mutations: {
    
   
    setData(state,payload) {
        state.data=payload;

    },
    
  },
  actions: {
    async setDataFromLocalStorage(_,payload) {
        localStorage.setItem(`${payload.id}`,`Title of task is ${payload.title} and des is ${payload.des}`)

      
    },
    async ReadData({commit},id) {
        const response =localStorage.getItem(`${id}`)
        commit('setData',response)
    },
    async deleteData({commit},id) {
        const response =localStorage.removeItem(`${id}`)
        commit('setData',response)
    },
   
  },


    
  
  getters: {
    getData(state) {
      return state.data;
    },
    

  },
});
