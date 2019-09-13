import Request from '@/utils/request'

export const getRoleList = data => Request.get('/system/role/list', data)

export const getRoleListById = ({ id, ...params }) => Request.get(`/system/${id}/list`, params)
