import request from '@/utils/request'

export function parkingInfo_list(){
  return request({
    url:'api/parkinginfo/list',
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
