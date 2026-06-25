import { defineStore } from 'pinia'
import { loginJD, logoutJD, getUserInfo } from '@/api/sso.js'
import Config from '@/config/index.js'
import { ref } from 'vue'

// 用户信息
const USER_INFO = {
  oort_name: 'guest',
  oort_uuid: 'guest',
  oort_depcode: '99',
  oort_depname: '所有部门'
}
// 平台token
const TOKEN = 'g02dce3c79a42653f0314ae2e1bdbebd0'
// 吉大登录后的token
const JDTOKEN = ''

// 标识是否已经登录了
const ISLOGIN = false

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = ref(USER_INFO)
  const token = ref(TOKEN)
  const jdToken = ref(JDTOKEN)
  const isLogin = ref(ISLOGIN)
  const setToken = (data) => {
    // 判断是否不等于这个固定token，就表示用户没有登录
    if (data !== 'g02dce3c79a42653f0314ae2e1bdbebd0') {
      isLogin.value = true
    }
    token.value = data
  }
  const setJDToken = (data) => {
    jdToken.value = data
  }
  const setUserInfo = (data) => {
    userInfo.value = data
  }
  const loginSSO = (params) => {
    return new Promise((resolve, reject) => {
      loginJD(params).then((res) => {
        if (res.code === 200) {
          setToken(res.data.userInfo.accessToken)
          window.sessionStorage.setItem('userId', res.data.userInfo.oort_uuid)
          setUserInfo(res.data.userInfo)
          resolve(res)
        } else {
          resolve(res)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  const getUser = () => {
    const params = {
      accessToken: token.value
    }
    return new Promise((resolve, reject) => {
      getUserInfo(params).then((res) => {
        if (res.code === 200) {
          setUserInfo(res.data.userInfo)
          window.sessionStorage.setItem('userId', res.data.userInfo.oort_uuid)
          resolve(res)
        } else {
          resolve(res)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  const logOutSSO = (isRedirect = true) => {
    const params = {
      // 登出的时候 先调用平台的sso登出
      accessToken: jdToken.value
    }
    return new Promise((resolve, reject) => {
      if (!jdToken.value) {
        window.location.href = Config.jdssoLogin + '/api/authcenter/ssoLogin?redirectUrl=' + window.location.origin
        resolve()
      } else {
        logoutJD(params).then((res) => {
          if (res.code === 200) {
            window.sessionStorage.setItem('token', '')
            window.sessionStorage.setItem('userType', '')
            setToken('')
            setUserInfo({ })
            // 是否 跳转到统一登录
            if (isRedirect) {
              window.location.href = Config.jdssoLogin + '/api/authcenter/ssoLogin?redirectUrl=' + window.location.origin
            } else {
              window.location.href = window.location.origin
            }
            resolve()
          } else if (res.code === 4004) {
            window.location.href = Config.jdssoLogin + '/api/authcenter/ssoLogin?redirectUrl=' + window.location.origin
            resolve()
          } else {
            console.log(res)
          }
        }).catch((error) => {
          reject(error)
        })
      }
    })
  }

  return {
    userInfo,
    token,
    jdToken,
    isLogin,
    loginSSO,
    logOutSSO,
    setUserInfo,
    setJDToken,
    setToken,
    getUser
  }
})
