/**
 Created by 兰舰 on 2019/12/31  16:45
 */
import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      url: Config.URL + '/oort/oortcloud-talk-topic/' + interfaceName,
      method: method,
      data: data
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// 首页获取栏目
export function homepage(data) {
  return commonFunc('client/homepage', data)
}

// 获取更多内容
export function more(data) {
  return commonFunc('client/more', data)
}

export function detail(data) {
  return commonFunc('client/detail', data)
}

