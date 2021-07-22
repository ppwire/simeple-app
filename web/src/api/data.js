import axiosInstance from './axios-instance'
import thirdParty from './third-party'

export default {
   getIncomes: () => {
      return new Promise((resolve, reject) => {
         axiosInstance.get('/income').then(res => {
            resolve(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   },

   getCountrys: () => {
      return new Promise((reslove, reject) => {
         thirdParty.get('/countries/capital').then(res => {
            reslove(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   },

   getStates: (country) => {
      return new Promise((reslove, reject) => {
         thirdParty.post('/countries/states', {
            country: country
         }).then(res => {
            reslove(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   },

   getCitys: (country, state) => {
      return new Promise((resolve, reject) => {
         thirdParty.post('/countries/state/cities', {
            country: country,
            state: state
         }).then(res => {
            resolve(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   }
}