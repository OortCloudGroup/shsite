/**
 Created by 兰舰 on 2023/5/12  10:19
  收藏接口
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

// 新增功能收藏
export function collectFunSave(data) {
  return commonFunc('collect/fun/save', data, 'post')
}

// 删除功能收藏
export function collectFunDel(data) {
  return commonFunc('collect/fun/del', data, 'post')
}

// 功能收藏列表
export function collectFunPage(data) {
  return commonFunc('collect/fun/page', data, 'post')
}
