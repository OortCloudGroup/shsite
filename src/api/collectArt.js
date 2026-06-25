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

// 新增文章收藏
export function collectArticleSave(data) {
  return commonFunc('collect/article/save', data, 'post')
}

// 删除文章收藏
export function collectArticleDel(data) {
  return commonFunc('collect/article/del', data, 'post')
}

// 文章收藏列表
export function collectArticlePage(data) {
  return commonFunc('collect/article/page', data, 'post')
}
