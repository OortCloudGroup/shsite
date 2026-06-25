// 证件类型 1:身份证 2:社保卡 3:港澳居民来往内地通行证 4:台湾居民来往大陆通行证 5:普通护照 6:外国人永久居留身份证 7:台湾居民居住证 8:港澳居民居住证
export function oortIdcardType(Type) {
  let nameType
  if (Type === 1) nameType = '身份证'
  if (Type === 2) nameType = '社保卡'
  if (Type === 3) nameType = '港澳居民来往内地通行证'
  if (Type === 4) nameType = '台湾居民来往大陆通行证'
  if (Type === 5) nameType = '普通护照'
  if (Type === 6) nameType = '外国人永久居留身份证'
  if (Type === 7) nameType = '台湾居民居住证'
  if (Type === 8) nameType = '港澳居民居住证'
  return nameType
}
// usertype 经办人权限 1:主经办人 2:经办人
export function getNaturalList_Type(Type) {
  let nameType
  if (Type === 1) nameType = '主经办人'
  if (Type === 2) nameType = '经办人'
  return nameType
}
export function cmsAchieve_Type(Type) {
  let nameType
  if (Type === '1') nameType = '已办结'
  if (Type === '2') nameType = '未办结'
  return nameType
}
