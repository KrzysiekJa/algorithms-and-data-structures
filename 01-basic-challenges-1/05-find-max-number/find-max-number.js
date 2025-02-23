function findMaxNumber(arr) {
  let max = 0

  for (ar of arr) {
    if (ar > max) {
      max = ar
    }
  }

  return max
}

module.exports = findMaxNumber
