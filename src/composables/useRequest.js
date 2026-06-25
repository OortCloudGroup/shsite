export const isRelogin = { show: false }

// const handleError = (response) => {
//   const err = () => {}
//   if (!response._data) {
//     err('请求超时，服务器无响应！')
//     return
//   }
//   const handleMap = {
//     404: () => err('服务器资源不存在'),
//     500: () => err('服务器内部错误'),
//     403: () => err('没有权限访问该资源'),
//     401: () => {
//       err('登录状态已过期，需要重新登录')
//       navigateTo('/')
//     }
//   }
//   handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
// }
// get方法传递数组形式参数
const fetch = (url, option) => {
  return useFetch(url, {
    // 请求拦截器
    // onRequest({ options }) {
    //   console.log('请求拦截器', options)
    //   // 请求埋点
    //   //  useTrack('request', option.name, '请求记录', url,
    //   //    options.headers, options.method, option.data, options.params)
    // },
    // /**
    //  * @description:
    //  * @return {*}
    //  */
    // // 响应拦截
    // onResponse({ response }) {
    //   console.log('响应拦截', response)
    //   // 在这里判断错误
    //   // if (response._data.code !== 200) {
    //   //   handleError(response)
    //   //   return Promise.reject(response._data)
    //   // }
    //   // 成功返回
    //   return response._data
    // },
    // // 错误处理
    // onResponseError({ response }) {
    //   // handleError(response);
    //   return Promise.reject(response?._data ?? null)
    // },
    // 合并参数
    ...option
  })
}

// 自动导出
export const useHttp = {
  get: (url, option) => {
    return fetch(url, { method: 'get', ...option })
  },

  post: (url, option) => {
    return fetch(url, { method: 'post', ...option })
  },

  put: (url, option) => {
    return fetch(url, { method: 'put', ...option })
  },

  delete: (url, option) => {
    return fetch(url, { method: 'delete', ...option })
  },
  http: (url, method, option) => {
    return fetch(url, { method: method, ...option })
  }
}
