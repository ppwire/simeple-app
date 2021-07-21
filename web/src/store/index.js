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
      geographic: '',
      income: '',
      gender: '',
      profilePic: '',
      subDistrict: '',
      distirct: '',
      province: '',
      zipCode: ''
    }
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
