/**
 Created by 兰舰 on 2023/5/12  10:19
 */
import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      url: Config.ZXBURL + '/portal/portal/' + interfaceName,
      // url: 'http://192.168.110.53:9309/' + interfaceName,
      method: method,
      headers: {
        'tenant_id': '1646039665800749057' // 一个固定的值
      },
      data: data
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// 发送验证码
export function sendPhoneCode(data) {
  return commonFunc('legalUser/sendShortMessage/' + data.mobiles, data, 'post')
}

// 保存咨询/投诉
export function saveAdvice(data) {
  return commonFunc('user/advice', data, 'post')
}

// 查看咨询投诉
export function adviceById(data) {
  return commonFunc('user/adviceById', data, 'post')
}

// 用户咨询/投诉列表
export function adviceList(data) {
  return commonFunc('user/adviceinfo', data, 'post')
}

// 统一政务服务投诉建议
export function dispatch(data) {
  return commonFunc('user/dispatch', data, 'post')
}

// 好差评列表
export function myAppraise(data) {
  return commonFunc('user/myAppraise', data, 'post')
}
