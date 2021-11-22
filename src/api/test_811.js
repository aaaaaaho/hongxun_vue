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


export function search_test(current,limit,carParkQuery){
  return request({
    url: `http://47.113.191.6:1102/carPark/list/selectConditionCarPark/${current}/${limit}`,
    method: 'post',
    data: carParkQuery
  })
}

export function delete_test(carParkId){
  return request({
    url:`http://47.113.191.6:1102/carPark/list/deleteCarPark/${carParkId}`,
    method:'delete',
  })
}

export function add_test(data){
  return request({
    url:'http://47.113.191.6:1102/carPark/list/addCarPark',
    method:'post',
    data: data,
  })
}
