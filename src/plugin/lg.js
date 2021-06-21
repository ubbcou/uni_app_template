import lodashGet from 'lodash.get'

/**
 * 安全获取数据
 * @param {String} path 路径lodash.get第一个参数
 * @param def 默认值
 * @return return 获取的值，不存在时返回默认值
 */
export function lg(path, def) {
  return lodashGet(this, path, def)
}
