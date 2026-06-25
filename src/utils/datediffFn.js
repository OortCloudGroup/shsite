// 计算出两个日期的年份差
export function DateDiff(date1, date2) { // date1和date2是YYYY-MM-DD
  let date1Str = date1.split('-')// 将日期字符串分隔为数组,数组元素分别为年.月.日
  // 根据年 . 月 . 日的值创建Date对象
  let date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2])
  let date2Str = date2.split('-')
  let date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2])
  let t1 = date1Obj.getTime()
  let t2 = date2Obj.getTime()
  let dateTime = 1000 * 60 * 60 * 24 // 每一天的毫秒数
  let minusDays = Math.floor(((t2 - t1) / dateTime))
  let dayAbs = Math.abs(minusDays) // 取绝对值
  let year = dayAbs / 365 // 年份
  let days = 0 // 1=5年 2=10年 3=20年 4=长期
  // 同月日份 年份相减
  if (!(date1Str[1] - date2Str[1]) && !(date1Str[2] - date2Str[2])) {
    year = date1Str[0] - date2Str[0]
  }
  if (year <= 5) days = 1
  if (year > 5 && year <= 10) days = 2
  if (year > 10 && year <= 20) days = 3
  if (year > 20) days = 4
  return days
}
// 通过身份证号码判断性别
/**
 * 按身份证号码获取性别
 * @idNumber 身份证号码
 * @return 男 女 身份证格式输入有误！
 */
export function getGender(idNumber) {
  let res = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
  if (idNumber && res.test(idNumber)) {
    let genderCode = idNumber.charAt(16)
    if (parseInt(genderCode) % 2 === 0) {
      return 2 // 2=女
    }
    return 1 // 1=男
  } else {
    return undefined // 身份证格式输入有误！
  }
}
