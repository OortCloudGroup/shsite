
export const checkSex = (idCardNo) => {
  var sexStr = ''
  if (idCardNo.length === 15) {
    sexStr = idCardNo.substring(14, 15)
  } else if (idCardNo.length === 18) {
    sexStr = idCardNo.substring(16, 17)
  } else {
    return '未知'
  }
  let sex = parseInt(sexStr) % 2 === 0 ? '女' : '男'
  return sex
}

// 身份证校验
export const checkIDCard = (id) => {
  let regex = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}[0-9Xx]$/
  return regex.test(id)
}

// 校验手机号
export const checkPhone = (phone) => {
  let regex = /^1[3456789]\d{9}$/
  return regex.test(phone)
}
