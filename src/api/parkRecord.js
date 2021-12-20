import request from '@/utils/request'

export function parkingRecord_presence(){
  return request({
    url:'api/parkRecord/presence',
    method: 'get'
  })
}

export function parkingRecord_parkDetail(){
  return request({
    url:'api/parkRecord/parkDetail',
    method: 'get'
  })
}

export function parkingRecord_tempStop(){
  return request({
    url:'api/parkRecord/tempStop',
    method: 'get'
  })
}

export function parkingRecord_abnormalRecord(){
  return request({
    url:'api/parkRecord/abnormalRecord',
    method: 'get'
  })
}

export function parkingRecord_recharge(){
  return request({
    url:'api/parkRecord/recharge',
    method: 'get'
  })
}

export function parkingRecord_shiftRecord(){
  return request({
    url:'api/parkRecord/shiftRecord',
    method: 'get'
  })
}

export function parkingRecord_carInOut(){
  return request({
    url:'api/parkRecord/carInOut',
    method: 'get'
  })
}

/***
 * 接下来的是实际用的接口
 */

export function parkingRecord_findAll(){
  return request({
    url:`http://47.113.191.6:1402/records/carrecords/findAll`,
    method: 'get'
  })
}

export function parkingRecordCondition(current,limit,carRecordQuery){
  return request({
    url:`http://47.113.191.6:1402/records/carrecords/selectConditionCarRecords/${current}/${limit}`,
    method: 'post',
    data : carRecordQuery
  })
}
