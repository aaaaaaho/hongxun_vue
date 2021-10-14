import request from '@/utils/request'

export function test_811(){
  return request({
    url:'api/register',
    method: 'get'
  })
}

export function test_811_2(){
  return request({
    url:'api/register_2',
    method: 'get'
  })
}

export function page_test(){
  return request({
    url:'api/test/page',
    method: 'get'
  })
}
