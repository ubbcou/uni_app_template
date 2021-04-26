
export function objectToQueryStr(data = {}) {
  return Object.keys(data).reduce((pre, curr, index, arr) => {
    let value = data[curr]
    if (typeof value === 'object') {
      value = encodeURIComponent(JSON.stringify(value))
    } else {
      value = encodeURIComponent(value)
    }
    pre += `${pre ? '&' : ''}${curr}=${value}`
    return index === arr.length - 1 ? `?${pre}` : pre
  }, '')
}

export function queryStrToObject(queryStr = '') {
  if (queryStr[0] === '?') {
    queryStr = queryStr.slice(1)
  }
  return queryStr.split('&').reduce((pre, curr) => {
    const [key, value] = curr.split('=')
    key && (pre[key] = decodeURIComponent(value))
    return pre
  }, {})
}
