import Request from '@/utils/request'

export const getProductList = data => Request.get('order/product', data)
