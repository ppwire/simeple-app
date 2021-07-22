import { createStore } from "vuex";
import { getField, updateField } from 'vuex-map-fields'

export default createStore({
  state: {
    signIn: {
      userName: '',
      password: ''
    },
    signUp: {
      userName: '',
      password: '',
      confirmPassword: '',
    },
    information: {
      address: '',
      income: '',
      gender: '',
      profilePic: '',
      country: '',
      city: '',
      state: ''
    },
  },
  mutations: {
    updateField,
  },
  getters: {
    getField,
  },
  actions: {},
  modules: {},
});
