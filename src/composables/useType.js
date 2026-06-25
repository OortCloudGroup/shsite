export const useType = () => {
  var is_mobi = navigator?.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null
  var pageWidth = (window?.innerWidth || document?.documentElement.clientWidth) < 750
  let isMobiFlag = is_mobi || pageWidth
  let pathPcMbFlag = false
  if (window) {
    pathPcMbFlag = window.location.href.includes('pc') || window.location.href.includes('mb')
    if (pathPcMbFlag) {
      if (isMobiFlag) {
        if (!window.location.href.includes('mb')) window.location.href = `${window?.location.origin}/mb`
      } else {
        if (!window.location.href.includes('pc')) window.location.href = `${window?.location.origin}/pc`
      }
    }
  }
  return { isMobiFlag, pathPcMbFlag }
}
