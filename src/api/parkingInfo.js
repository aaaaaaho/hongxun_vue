import request from '@/utils/request'

export function parkingInfo_list(){
  return request({
    url:'http://47.113.191.6:1102/carPark/list/findAll',
    // 'http://47.113.191.6:1102/admin/carPark/list/findAll'
    method: 'get'
  })
}

export function parkingInfo_longRent(){
  return request({
    url:'api/parkinginfo/longRent',
    method: 'get'
  })
}

export function parkingInfo_user(){
  return request({
    url:'api/parkinginfo/user',
    method: 'get'
  })
}

export function parkingInfo_specialCar(){
  return request({
    url:'api/parkinginfo/specialCar',
    method: 'get'
  })
}
