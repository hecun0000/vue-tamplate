import request from '@/utils/request'

export function getToken () {
  return request.get(
    '/qiniu/upload/token' // 假地址 自行替换
  )
}
