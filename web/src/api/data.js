import backendApi from './axios-instance'

export default {
   getIncome: () => {
      return new Promise((resolve, reject) => {
         backendApi.get('/income').then(res => {
            console.log(res)
            resolve(res.data)
         }).catch(err => {
            reject(err)
         })
      })
   }
}