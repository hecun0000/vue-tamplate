import request from '@/utils/request'

export function fetchList (query) {
  return request.get(
    '/article/list',
    query
  )
}

export function fetchArticle (id) {
  return request.get(
    '/article/detail',
    { id }
  )
}

export function fetchPv (pv) {
  return request.get(
    '/article/pv',
    { pv }
  )
}

export function createArticle (data) {
  return request.post(
    '/article/create',
    data
  )
}

export function updateArticle (data) {
  return request.post(
    '/article/update',
    data
  )
}
