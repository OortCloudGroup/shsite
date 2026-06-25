/**
 Created by 兰舰 on 2019/12/31  16:45
 */
import Config from '@/config/index.js'
import http from '@/utils/http.js'

function commonFunc(interfaceName, data, method = 'post') {
  return new Promise(resolve => {
    http({
      url: Config.URL + '/oort/oortcloud-admin-platform/' + interfaceName,
      method: method,
      data: data
    }).then((res) => {
      resolve(res)
    }, (e) => {
      console.log('error', e)
    })
  })
}

// 获取分类列表
export function classifylist(data) {
  return commonFunc('admin-platform/classifylist', data)
}

// 应用市场（应用列表）
export function appmarket(data) {
  return commonFunc('admin-platform/appmarket', data)
}

// 应用市场（个人操作板块）
export function appmarketperson(data) {
  return commonFunc('/admin-platform/appmarketmodule', data)
}

// 审核
export function audit(data) {
  return commonFunc('admin-platform/audit', data)
}

// 删除审核
export function auditdelete(data) {
  return commonFunc('admin-platform/auditdelete', data)
}

// 审核详情
export function auditdetail(data) {
  return commonFunc('admin-platform/auditdetail', data)
}

// 审核列表
export function auditlist(data) {
  return commonFunc('admin-platform/auditlist', data)
}

// 新增分类
export function classifyadd(data) {
  return commonFunc('admin-platform/classifyadd', data)
}

// 删除分类
export function classifydelete(data) {
  return commonFunc('admin-platform/classifydelete', data)
}

// 编辑分类
export function classifyedit(data) {
  return commonFunc('admin-platform/classifyedit', data)
}

// 获取管理员日志
export function getadminlog(data) {
  return commonFunc('admin-platform/getadminlog', data)
}

// 新增供应商
export function supplieradd(data) {
  return commonFunc('admin-platform/supplieradd', data)
}

// 删除供应商
export function supplierdelete(data) {
  return commonFunc('admin-platform/supplierdelete', data)
}

// 供应商详情
export function supplierdetail(data) {
  return commonFunc('admin-platform/supplierdetail', data)
}

// 编辑供应商
export function supplieredit(data) {
  return commonFunc('admin-platform/supplieredit', data)
}

// 供应商列表
export function supplierlist(data) {
  return commonFunc('admin-platform/supplierlist', data)
}

//  应用统计
export function num(data) {
  return commonFunc('admin-platform/app/num', data)
}

// 板块模板列表
export function initlist(data) {
  return commonFunc('admin-platform/module/initlist', data)
}

// 编辑板块模板列表 添加应用修改应用
export function initedit(data) {
  return commonFunc('admin-platform/module/initedit', data)
}

// 板块模板列表
export function initdetele(data) {
  return commonFunc('admin-platform/module/initdetele', data)
}

// 板块模板列表详情
export function initdetail(data) {
  return commonFunc('admin-platform/module/initdetail', data)
}

// 版块添加
export function initadd(data) {
  return commonFunc('admin-platform/module/initadd', data)
}

// 版块添加
export function classifyappmore(data) {
  return commonFunc('client/app/classifyappmore', data)
}

// 板块移动
export function initshift(data) {
  return commonFunc('admin-platform/module/initshift', data)
}

// 我的
// 模块列表
// export function myMouduleList(data) {
//   return commonFunc('client/module/list', data)
// }

// 移动端我的模块列表
export function myMouduleMyList(data) {
  return commonFunc('client/module/mylist', data)
}

// 移动模块
export function myMouduleShift(data) {
  return commonFunc('client/module/shift', data)
}

// 编辑模块
export function myMouduleEdit(data) {
  return commonFunc('/client/module/edit', data)
}

// 删除
export function myMouduleDelete(data) {
  return commonFunc('client/module/delete', data)
}

// 还原
export function myMouduleInit(data) {
  return commonFunc('client/module/init', data)
}

// 添加
export function myMouduleAdd(data) {
  return commonFunc('client/module/add', data)
}

//  申请服务
export function apply(data) {
  return commonFunc('supplier-platform/service/apply', data)
}

// 我申请的服务列表
export function list(data) {
  return commonFunc('supplier-platform/service/list', data)
}

// 服务详情
export function serviceDetail(data) {
  return commonFunc('supplier-platform/service/detail', data)
}

// 所有人还原
export function myMouduleInitAll(data) {
  return commonFunc('client/module/initall', data)
}
// 模块强制同步给所有人
export function forceSync(data) {
  return commonFunc('client/module/forcesync', data)
}

// pc获取所有应用
export function appList(data) {
  return commonFunc('client/getallapp', data)
}

// 应用详情
export function appDetail(data) {
  return commonFunc('supplier-platform/app/detail', data)
}

// // // 客户端获取分类
// export function clientClassifylist(data) {
//   return commonFunc('client/app/clientclassifylist', data)
// }
//
// // 获取分类下所有的应用
// export function getClassifyAppList(data) {
//   return commonFunc('/client/app/classifyappmore', data)
// }

// TODO 待更新后放开修改为事项的接口
// 客户端获取事项分类
export function clientClassifylist(data) {
  return commonFunc('client/item/clientclassifylist', data)
}

// 获取事项分类下所有的事项
export function getClassifyAppList(data) {
  return commonFunc('client/item/classifyappmore', data)
}

// 申请应用
export function applyItem(data) {
  return commonFunc('client/item/applyItem', data)
}

// 事项模块列表
export function myMouduleList(data) {
  return commonFunc('client/item/module/list', data)
}
