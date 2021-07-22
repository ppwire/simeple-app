import axiosInstance from './axios-instance'

export default {
   userSignUp: (signUp, information) => {
      return new Promise((resolve, reject) => {
         axiosInstance.post('/user', {
            userName: signUp.userName,
            userPassword: signUp.password,
            profilePic: information.profilePic,
            gender: information.gender.value,
            address: information.address,
            incomeId: information.income.id,
            provincesId: information.province.id,
            amphuresId: information.district.id,
            districtsId: information.subDistrict.id
         }).then(res => {
            console.log(res)
            resolve(res.data)
         }).catch(err => {
            console.log(err)
            reject(err)
         })
      })
   }
}