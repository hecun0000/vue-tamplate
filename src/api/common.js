/**
 * 请求统一管理
 */
import Request from '@/utils/request'

/* Common */
export const rankGender = data => Request.get('/ranking/gender', data)
