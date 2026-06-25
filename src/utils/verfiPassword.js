/**
 Created by  lanjian   on 2023/9/7  21:06
 */

/**
 * 返回密码登记
 * */
export default function verfiPassword(pwd) {
  let reg = /^[\w]{8,16}$/i// 判断密码格式是否正确
  let reg1 = /[a-zA-Z]/// 字母
  let reg2 = /\d/// 数字
  let reg3 = /_/// 下划线
  let level = 0
  if (reg.test(pwd)) { // 密码格式正确的情况下
    if (reg1.test(pwd) && reg2.test(pwd) && reg3.test(pwd)) {
      // 高级密码
      level = 3
    } else if (reg1.test(pwd) && reg2.test(pwd)) {
      // 中级密码
      level = 2
    } else if (reg1.test(pwd) || reg2.test(pwd)) {
      // 低级密码
      level = 1
    } else {
      level = 0
    }
  } else {
    level = 0
  }
  return level
}
