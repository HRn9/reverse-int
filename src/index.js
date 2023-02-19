module.exports = function reverse (n) {
  const arr = n.toString(10).split('').map(int => parseInt(int, 10))
  const reversed = arr.reverse()
  const str = reversed.join('')
  const result = Number(str)
  if (n < 0) {
    return Number(str.slice(0, -3))
  }
  return result
}
