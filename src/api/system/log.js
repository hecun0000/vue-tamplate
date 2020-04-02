import Request from '@/utils/request'

export const getLogList = data => Request.get('system/log', data)
