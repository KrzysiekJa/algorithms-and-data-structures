function countOccurrences(str, char) {
  let count = 0
  for (const chr of str) {
    if (chr === char) {
      count++
    }
  }

  return count
}

module.exports = countOccurrences
