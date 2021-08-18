import request from '@/utils/request'

export function demo(data) {
  return request.get('/api/test', data, { errLevel: 2 })
}
