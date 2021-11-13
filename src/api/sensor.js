import request from '@/utils/request'

export function sensor_test(){
  return request({
    url:'api/sensor/test',
    method: 'get'
  })
}
