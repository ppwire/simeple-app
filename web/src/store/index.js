import { createStore } from "vuex";
import { getField, updateField } from 'vuex-map-fields'
import userApi from '../api/user'

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
      province: '',
      district: '',
      subDistrict: '',
      zipCode: ''
    },
  },
  mutations: {
    updateField,
  },
  getters: {
    getField,
  },
  actions: {
    userSignUp() {
      return userApi.userSignUp(this.state.signUp, this.state.information)
    }
  },
  modules: {},
});
