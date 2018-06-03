import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    filter: null
  },
  getters:{
    getFilter(state){
      return state.filter;
    }
  },
  mutations:{
    setFilter(state, payload){
      state.filter = payload;
    }
  }
});