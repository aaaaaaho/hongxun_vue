import request from '@/utils/request'

export function business_traffic(){
  return request({
    url:'api/parkRecord/carInOut',
    method: 'get'
  })
}
