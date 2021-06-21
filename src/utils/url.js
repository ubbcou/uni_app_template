/* eslint-disable no-param-reassign */
// 通用

/**
 * 对象转查询参数
 * @example
 * returns ''
 * objectToQuery()
 * @example
 * returns 'name=abc'
 * objectToQuery({ name: 'abc' })
 * @example
 * returns 'name=abc&age=35'
 * objectToQuery({ name: 'abc', age: 35 })
 */
export function objectToQuery(obj = {}) {
  return Object.keys(obj).reduce((pre, curr) => {
    let value = obj[curr]
    if (typeof value === 'object') {
      value = encodeURIComponent(JSON.stringify(value))
    }
    pre += `${pre ? '&' : ''}${curr}=${value}`
    return pre
  }, '')
}
/**
 * 查询参数转对象
 * @example
 * returns {}
 * queryStrToObject()
 * @example
 * returns { name: 'abc' }
 * queryStrToObject('name=abc')
 * @example
 * returns { name: 'abc', age: 35 }
 * queryStrToObject('name=abc&age=35')
 */
export function queryStrToObject(queryStr = '') {
  if (queryStr[0] === '?') {
    queryStr = queryStr.slice(1)
  }
  return queryStr.split('&').reduce((pre, curr) => {
    const [key, value] = curr.split('=')
    if (key) {
      pre[key] = decodeURIComponent(value)
    }
    return pre
  }, {})
}


// 小程序专有


