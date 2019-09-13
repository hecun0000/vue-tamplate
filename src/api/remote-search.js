import request from '@/utils/request'

export function searchUser (name) {
  return request.get(
    '/search/user',
    name
  )
}

export function transactionList (query) {
  return request.get(
    '/transaction/list',
    query
  )
}
