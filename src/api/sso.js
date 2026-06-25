/**
 Created by 兰舰 on 2023/5/12  10:19
 */
import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      url: Config.URL + '/oort/oortcloud-sso/' + interfaceName,
      method: method,
      data: data
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// sso 登录
export function login(data) {
  return commonFunc('sso/v1/login', data, 'post', false)
}

// 验证Token
export function verifyToken(data) {
  return commonFunc('sso/v1/verifyToken', data)
}

// 刷新token
export function refreshToken(data) {
  return commonFunc('sso/v1/refreshToken', data, 'post', false)
}

// 登出
export function logout(data) {
  return commonFunc('sso/v1/logout', data, 'post', false)
}

// 获取用户信息
export function getUserInfo(data) {
  return commonFunc('sso/v1/getUserInfo', data, 'post', false)
}

// 修改密码
export function resetPassword(data) {
  return commonFunc('sso/v1/resetPassword', data)
}

// 部门和用户树
export function getdeptuser(data) {
  return commonFunc('sso/v1/getdeptuser', data)
}

// 审计日志
export function auditLoglist(data) {
  return commonFunc('auditLog/v1/auditLoglist', data)
}

// 审核用户列表
export function regUserList(data) {
  return commonFunc('cetc/v1/regUserList', data)
}

// 审核用户
export function regUserReview(data) {
  return commonFunc('cetc/v1/regUserReview', data)
}

// 获取审核用户信息
export function getEtcUserInfo(data) {
  return commonFunc('cetc/v1/getUserInfo', data)
}

// 审核企业群列表
export function getReviewList(data) {
  return commonFunc('cetc/v1/getReviewList', data)
}

// 审核企业群r
export function reviewInfo(data) {
  return commonFunc('cetc/v1/ReviewInfo', data)
}

// 获取审核企业群信息
export function reviewAction(data) {
  return commonFunc('cetc/v1/Review', data)
}

// 获取我加入的群列表
export function getGroupList(data) {
  return commonFunc('cetc/v1/getGroupList', data)
}

// 获取我的群列表
export function getMyGroupList(data) {
  return commonFunc('cetc/v1/getMyGroupList', data)
}

// 是否需要验证码
export function getCaptcha(data) {
  return commonFunc('sso/v1/getCaptcha', data)
}

// 刷新滑动验证码
export function sliderefresh(data) {
  return commonFunc('sso/v1/sliderefresh', data)
}

// 校验滑动验证
export function slideverify(data) {
  return commonFunc('sso/v1/slideverify', data)
}

// 部门列表
export function deptlist(data) {
  return commonFunc('sso/v1/deptlist', data)
}

// 部门详情列表
export function getDeptInfoList(data) {
  return commonFunc('sso/v1/getDeptInfoList', data)
}

// 用户详情表
export function getUserInfoList(data) {
  return commonFunc('sso/v1/getUserInfoList', data)
}

// 用户列表
export function userlist(data) {
  return commonFunc('sso/v1/userlist', data)
}

// 注册
export function register(data) {
  return commonFunc('sso/v1/register', data, 'post', false)
}

// 获取手机验证码
export function sendsmscode(data) {
  return commonFunc('sso/v1/sendsmscode', data, 'post', false)
}

// 绑定账号
export function wxBuilduserr(data) {
  return commonFunc('wx/v1/builduser', data)
}

// 解绑微信账号
export function unbuilduser(data) {
  return commonFunc('wx/v1/unbuilduser', data)
}

// 获取部门详细信息
export function getDeptInfo(data) {
  const showHide = data.hideLoading
  delete data.hideLoading
  return commonFunc('sso/v1/getDeptInfo', data, 'post', !showHide)
}

// 获取im配置
export function imConfig(data) {
  return commonFunc('v1/imconfig?accessToken=' + data.accessToken, '', 'get', false)
}

// 初始化im设置
export function initIM(data) {
  return commonFunc('v1/initim', data, 'post', false, true)
}

// 下线 登录的账号
export function kickLoggined(data) {
  return commonFunc('v1/kickloggined', data, 'post')
}

// 获取license
export function getLicense(data) {
  return commonFunc('v1/license?accessToken=' + data.accessToken, '', 'get')
}

// 保存license
export function saveLicense(data) {
  return commonFunc('v1/license', data, 'post')
}

// 获取登录账号
export function logginedList(data) {
  return commonFunc('v1/loggined', data, 'post')
}

// 获取系统信息
export function getSystemInfo(data) {
  return commonFunc('v1/sysload?accessToken=' + data.accessToken, '', 'get')
}

// 获取时间
export function getSystemTime(data) {
  return commonFunc('v1/datetime?accessToken=' + data.accessToken, '', 'get')
}

// 设置时间
export function setSystemTime(data) {
  return commonFunc('v1/datetime', data, 'post')
}

// 登录时间解锁
export function loginerrtimes(data) {
  return commonFunc('v1/clear/loginerrtimes', data, 'post')
}

// 平台配置 保存配置
export function frontConfigSet(data) {
  return commonFunc('frontConf/v1/set', data, 'post')
}

// 保存用户信息
export function setUserInfo(data) {
  return commonFunc('sso/v1/setUserInfo', data, 'post')
}

// 查询二维码扫描状态
export function qrcodeCheck(data) {
  return commonFunc('sso/v1/qrcode.check', data, 'post')
}

// 获取二维码唯一值
export function qrcoceGetKey(data) {
  return commonFunc('sso/v1/qrcode.getkey', data, 'post')
}

// set
// 删除部门配置
export function columnDeptDel(data) {
  return commonFunc('set/v1/column.deptdel', data, 'post')
}

// 获取部门配置
export function columnDeptGet(data) {
  return commonFunc('set/v1/column.deptget', data, 'post')
}

// 设置部门配置
export function columnDeptSet(data) {
  return commonFunc('set/v1/column.deptset', data, 'post')
}

// 获取全局配置
export function columnGolbalGet(data) {
  return commonFunc('set/v1/column.golbalget', data, 'post')
}

// 设置全局配置
export function columnGolbalSet(data) {
  return commonFunc('set/v1/column.golbalset', data, 'post')
}

// 删除个人配置
export function columnUserDel(data) {
  return commonFunc('set/v1/column.userdel', data, 'post')
}

// 获取个人配置
export function columnUserGet(data) {
  return commonFunc('set/v1/column.userget', data, 'post')
}

// 设置个人配置
export function columnUserSet(data) {
  return commonFunc('set/v1/column.userset', data, 'post')
}

// 部门用户列表（通讯录显示相关）
export function columnDeptList(data) {
  return commonFunc('set/v1/deptlist', data, 'post')
}

// 获取我的权限
export function getMyAuth(data) {
  return commonFunc('set/v1/getMyauth', data, 'post')
}

// 设置部门是否在通讯录中显示
export function hideenDept(data) {
  return commonFunc('set/v1/hidden.dept', data, 'post')
}

// 设置用户是否在通讯录中显示
export function hideenUser(data) {
  return commonFunc('set/v1/hidden.user', data, 'post')
}

// 设置权限
export function saveAuth(data) {
  return commonFunc('set/v1/saveAuth', data, 'post')
}

// 设置部门排序
export function sortSetDept(data) {
  return commonFunc('set/v1/sortset.dept', data, 'post')
}

// 设置用户排序
export function sortSetUser(data) {
  return commonFunc('set/v1/sortset.user', data, 'post')
}

// 设置用户列表
export function columnUserList(data) {
  return commonFunc('set/v1/userlist', data, 'post', false, true)
}

// 标签
// 删除标签
export function tagDel(data) {
  return commonFunc('tag/v1/tagDel', data, 'post')
}

// 标签列表
export function tagList(data) {
  return commonFunc('tag/v1/tagList', data, 'post')
}

// 添加修改标签
export function tagSet(data) {
  return commonFunc('tag/v1/tagSet', data, 'post')
}

// 标签关联用户
export function tagUserAdd(data) {
  return commonFunc('tag/v1/tagUserAdd', data, 'post')
}

// 标签关联用户删除
export function tagUserDel(data) {
  return commonFunc('tag/v1/tagUserDel', data, 'post')
}

// 标签关联用户列表
export function tagUserList(data) {
  return commonFunc('tag/v1/tagUserList', data, 'post')
}

// 获取最近联系人
export function usedGet(data) {
  return commonFunc('tag/v1/usedGet', data, 'post')
}

// 上报最近联系人
export function usedSet(data) {
  return commonFunc('tag/v1/usedSet', data, 'post')
}

// 清空最近联系人
export function usedDel(data) {
  return commonFunc('tag/v1/usedDel', data, 'post')
}

// 地址本
// 删除地址本
export function addressDel(data) {
  return commonFunc('address/v1/tagDel', data, 'post')
}

// 地址本列表
export function addressList(data) {
  return commonFunc('address/v1/tagList', data, 'post')
}

// 添加修改地址本
export function addressSet(data) {
  return commonFunc('address/v1/tagSet', data, 'post')
}

// 地址本关联用户
export function addressUserAdd(data) {
  return commonFunc('address/v1/tagUserAdd', data, 'post')
}

// 地址本关联用户删除
export function addressUserDel(data) {
  return commonFunc('address/v1/tagUserDel', data, 'post')
}

// 地址本关联用户列表
export function addressUserList(data) {
  return commonFunc('address/v1/tagUserList', data, 'post')
}

// 检察院登陆列表 获取东软登陆部门列表
export function szjcyList(data) {
  return commonFunc('sso/v1/szjcyList', data)
}

export function loginJD(data) {
  return commonFunc('zxb/v1/logincheck', data)
}

export function logoutJD(data) {
  return commonFunc('zxb/v1/logout', data)
}

// 法人注册
export function legalRegister(data) {
  return commonFunc('zxb/v1/legal_register', data)
}

// 自然人注册
export function normalRegister(data) {
  return commonFunc('zxb/v1/register', data)
}

// 发送验证码
export function sendSMS(data) {
  return commonFunc('zxb/v1/sendSMS', data)
}

// 重置吉大的密码
export function resetJDPassword(data) {
  return commonFunc('zxb/v1/reset_password', data)
}
// 确认身份
export function verifyIdentidy(data) {
  return commonFunc('/zxb/v1/verify_identidy', data)
}
// 确认身份验证手机校验码
export function verifyIdentidyCode(data) {
  return commonFunc('/zxb/v1/verify_identidy_code', data)
}
// 重置密码
export function zxbresetPassword(data) {
  return commonFunc('/zxb/v1/reset_password', data)
}

// 我的经办人列表接口
export function geNaturalListd(data) {
  return commonFunc('/zxb/v1/get_natural_list', data)
}
// 删除经办人接口
export function delnatural(data) {
  return commonFunc('/zxb/v1/del_natural', data)
}
// 升降级经办人接口
export function setNaturalGrade(data) {
  return commonFunc('/zxb/v1/set_natural_grade', data)
}
// 获取法人信息接口
export function getLegalInfo(data) {
  return commonFunc('/zxb/v1/get_legal_info', data)
}
// 修改密码
export function changePassword(data) {
  return commonFunc('/zxb/v1/change_password', data)
}
// 验证手机校验码
export function verifyCode(data) {
  return commonFunc('/zxb/v1/verify_code', data)
}
