import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    mainPassword: '',
    publicKey: '',
    privateKey: ''
  },
  mutations: {
    setPassword: (state, data) => {
      state.mainPassword = data;
    },
    setPublicKey: (state, data) => {
      state.publicKey = data;
    },
    setPrivateKey: (state, data) => {
      state.privateKey = data;
    }
  },
  actions: {
    setPassword({commit}) {
      commit('setPassword')
    },
    setPublicKey({commit}) {
      commit('setPublicKey')
    },
    setPrivateKey({commit}) {
      commit('setPrivateKey')
    }
  }
})
