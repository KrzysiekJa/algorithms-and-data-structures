function removeDuplicates(arr) {
  const seen = {}
  const result = []

  for (const ar of arr) {
    if (!seen[ar]) {
      seen[ar] = true
      result.push(ar)
    }
  }

  return result
}

module.exports = removeDuplicates
