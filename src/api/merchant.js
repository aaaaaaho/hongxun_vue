import request from '@/utils/request'

export function merchant_list(){
  return request({
    url:'api/merchant/list',
    method: 'get'
  })
}

export function merchant_users(){
  return request({
    url:'api/merchant/users',
    method: 'get'
  })
}
