/**
 Created by 兰舰 on 2023/5/12  10:19
  足迹服务
 */
import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      // url: 'http://192.168.110.178:9302/portal/' + interfaceName,
      // 网关
      url: Config.ZXBURL + '/portal/' + interfaceName,
      method: method,
      data: (method === 'post' || method === 'put') ? data : {},
      params: (method === 'get' || method === 'delete') ? data : {},
      headers: {
        'tenant_id': '1646039665800749057' // 一个固定的值
        // 'Content-Type': ' application/x-www-form-urlencoded'
      }
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// 添加足迹
export function addFootPrint(data) {
  return commonFunc('api/v1/footprints/add', data, 'post')
}

// 修改足迹
export function upFootPrint(data) {
  return commonFunc('api/v1/footprints/up', data, 'post')
}

// 删除足迹
export function delFootPrint(data) {
  return commonFunc('api/v1/footprints/del', data, 'post')
}

// 查询足迹信息
export function getFootPrint(data) {
  return commonFunc('api/v1/footprints/page', data, 'post')
}

// 删除文章足迹
export function deleteFootPrint(data) {
  return commonFunc('api/v1/footprints/del/all', data, 'post')
}
