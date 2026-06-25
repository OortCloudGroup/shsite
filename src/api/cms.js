/**
 Created by 兰舰 on 2023/5/12  10:19
  足迹服务
 */
import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      // wt 本地服务测试
      // url: 'http://192.168.110.178:9302/portal/' + interfaceName,
      // 网关
      url: Config.ZXBURL + '/portal/' + interfaceName,
      method: method,
      data: (method === 'post' || method === 'put') ? data : {},
      params: (method === 'get' || method === 'delete') ? data : {},
      headers: {
        'tenant_id': '1646039665800749057' // 一个固定的值
      }
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// 我的办件
export function cmsAchieve(data) {
  return commonFunc('interface/v1/achieve', data, 'post')
}

// 我的待办
export function cmsDaiban(data) {
  return commonFunc('interface/v1/daiban', data, 'post')
}

// 搜索您想了解的服务/事项
export function searchWcm(data) {
  return commonFunc('cms/searchWcm', data, 'get')
}

// 我的消息
export function myMsg(data) {
  return commonFunc('msg/v1/page', data, 'post')
}

// 我的消息详情
export function myMsgDetail(data) {
  return commonFunc('msg/v1/id', data, 'post')
}

