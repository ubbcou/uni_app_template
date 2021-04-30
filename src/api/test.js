import request from '@/api/request'

export function demo(data) {
  return request.get('/api/test', data)
}
