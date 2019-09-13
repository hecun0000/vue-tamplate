import request from '@/utils/request'

export function getRoutes () {
  return request.get('/routes'
  )
}

export function getRoles () {
  return request.get('/roles'
  )
}

export function addRole (data) {
  return request.post('/role',
    data
  )
}

export function updateRole (id, data) {
  return request.put(`/role/${id}`,
    data
  )
}

export function deleteRole (id) {
  return request.delete(`/role/${id}`
  )
}
