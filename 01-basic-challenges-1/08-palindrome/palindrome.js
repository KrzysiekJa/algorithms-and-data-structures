function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const middle = Math.floor(str.length / 2)
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

module.exports = isPalindrome
