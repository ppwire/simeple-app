import { createStore } from "vuex";
import { getField, updateField } from 'vuex-map-fields'
import userApi from '../api/user'

export default createStore({
  state: {
    signIn: {
      userName: '',
      password: '',
      name: localStorage.getItem('name') || null,
      token: localStorage.getItem('token') || null,
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
    setToken(state, value) {
      localStorage.setItem('token', value)
      localStorage.setItem('name', state.signIn.userName)
      state.signIn.name = state.signIn.userName
      state.signIn.token = value
    },
    destroyToken(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      state.signIn.userName = ''
      state.signIn.password = ''
      state.signIn.token = null
    },
    clearField(state) {
      state.signUp.userName = ''
      state.signUp.password = ''
      state.signUp.confirmPassword = ''
      state.information.address = ''
      state.information.district = ''
      state.information.gender = ''
      state.information.income = ''
      state.information.profilePic = ''
      state.information.province = ''
      state.information.district
      state.information.subDistrict = ''
      state.information.zipCode = ''
    }
  },
  getters: {
    getField,
  },
  actions: {
    userSignUp(context) {
      return userApi.userSignUp(context.state.signUp, context.state.information)
    },
    userSignIn(context) {
      return userApi.userSignIn(context.state.signIn)
    },
    getUserContent(context) {
      return userApi.getUserData(context.state.signIn.token)
    },
    getUserName(context) {
      return userApi.getUser(context.state.signUp.userName)
    }
  },
  modules: {},
});
