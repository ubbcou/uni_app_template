export const addZero = num => {
  let n = +num || 0
  n = n.toString()
  return n[1] ? n : `0${n}`
}
