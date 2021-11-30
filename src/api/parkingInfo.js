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

//=======================//

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

// export function excel_output(){
//   return request({
//     url: 'http://47.113.191.6:1102/carPark/list/download',
//     responseType : 'blob',
//     method: 'post',
//   })
// }

export function update_test(data){
  return request({
    url:'http://47.113.191.6:1102/carPark/list/updateCarPark',
    method:'post',
    data: data,
  })
}

export function searchById(carParkId){
  return request({
    url:`http://47.113.191.6:1102/carPark/list/getCarPark/${carParkId}`,
    method:'get',
  })
}

//=======================//

export function carParkUserFindAll(){
  return request({
    url:'http://47.113.191.6:1102/carPark/user/findAll',
    method:'get'
  })
}

export function deleteCarParkUserById(carParkUserId){
  return request({
    url:`http://47.113.191.6:1102/carPark/user/deleteCarParkUser/${carParkUserId}`,
    method:'delete',
  })
}

export function addCarParkUser(data){
  return request({
    url:'http://47.113.191.6:1102/carPark/user/addCarParkUser',
    method:'post',
    data :data
  })
}

export function selectConditionCarParkUser(current,limit,carParkQuery){
  return request({
    url: `http://47.113.191.6:1102/carPark/user/selectConditionCarParkUser/${current}/${limit}`,
    method: 'post',
    data: carParkQuery
  })
}

export function editUpdateCarParkUser(data){
  return request({
    url: 'http://47.113.191.6:1102/carPark/user/updateCarParkUser',
    method: 'post',
    data :data
  })
}

export function carParkUserSearchById(){

}
