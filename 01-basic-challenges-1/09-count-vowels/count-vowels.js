function countVowels(str) {
  const vowels = new Set(['a', 'i', 'u', 'e', 'o'])
  let count = 0

  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++
    }
  }

  return count
}

module.exports = countVowels
