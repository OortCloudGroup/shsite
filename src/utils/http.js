import axios from 'axios'
import Config from '../config'
import { useUserStore } from '@/stores/useUserStore'

let commonAxios = axios.create()
commonAxios.defaults.timeout = 10000 // 请求超时时间

// axios 请求拦截器
commonAxios.interceptors.request.use(
  config => {
    let token = window.accessToken
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'requestType': Config.requestType,
      'secretKey': Config.secretKey,
      'appID': Config.applyID,
      'accessToken': token,
      'Authorization': token,
      ...config.headers
    }
    return config
  },
  error => {
    return Promise.error(error)
  }
)
// axios respone拦截器
commonAxios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误 结合自身业务和后台返回的接口状态约定写respone拦截器
    if (response.status === 200) {
      if (response.data.code === 500201 && response.data.msg.includes('token')) {
        ElMessageBox.alert('用户凭证已过期,请重新登录', '提示', {
          confirmButtonText: '去登录',
          callback: () => {
            useUserStore().logOutSSO()
          }
        })
        return Promise.reject('当前网络繁忙，请稍候重试 token 失效 4004')
      }
      // console.log(response.data)
      // if (response.data.code === 4004) {
      //   // if (response.data.code === 4004) {
      //   //   // ElMessageBox.alert('用户凭证已过期,请重新登录', '提示', {
      //   //   //   confirmButtonText: '去登录',
      //   //   //   callback: () => {
      //   //   //     useUserStore().logOutSSO()
      //   //   //   }
      //   //   // })
      //   //   return Promise.reject('当前网络繁忙，请稍候重试 token 失效 4004')
      //   // }
      //   return Promise.reject('当前网络繁忙，请稍候重试 token 失效 4004')
      // }
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (!!error.message) {
      if (error.message.includes('timeout')) {
        return Promise.reject('网络请求超时，请稍候重试')
      }
      if (error.message.includes('404')) {
        return Promise.reject('糟糕页面丢失了，请稍候重试404')
      }
      if (error.message.includes('500')) {
        return Promise.reject('当前服务异常，请稍候重试500')
      }
    }
    return Promise.reject('网络请求失败' + error.message)
  }
)

export default function http(option) {
  return new Promise((resolve, reject) => {
    commonAxios(option)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
