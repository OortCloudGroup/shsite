
import { addFootPrint } from '@/api/footprint'

export default {
  // 自定义埋点指令
  mounted(el, binding) {
    if (binding.value) {
      // 这里参数是根据自己业务可以自己定义
      let params = {
        type: binding.value.behavior,
        content: binding.value.content,
        userId: window.sessionStorage.getItem('userId') || '',
        pathHistory: window.location.origin + window.location.pathname
      }
      // 如果是浏览类型，直接保存
      if (binding.value.type === 'browse') {
        // 调用后台接口保存数据,
        if (params.userId !== 'guest') {
          addFootPrint(params)
        }
        console.log('buiredPoint info ', params)
      } else if (binding.value.type === 'click') {
        // 如果是click类型，监听click事件
        el.addEventListener('click', () => {
          if (params.userId !== 'guest') {
            // 调用后台接口保存数据
            addFootPrint(params)
          }
          console.log('buiredPoint info ', params)
        }, false)
      }
    }
  }
}
