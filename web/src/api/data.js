import axiosInstance from './axios-instance'

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

   getProvinces: () => {
      return new Promise((reslove, reject) => {
         axiosInstance.get('/provinces').then(res => {
            reslove(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   },

   getDistricts: (id) => {
      return new Promise((reslove, reject) => {
         axiosInstance.get(`/amphures?id=${id}`).then(res => {
            reslove(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   },

   getSubDistricts: (id) => {
      return new Promise((resolve, reject) => {
         axiosInstance.get(`/districts?id=${id}`).then(res => {
            resolve(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   }
}