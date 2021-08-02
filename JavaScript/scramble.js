// str1 = scrambled letters (any number)
// str2 = word to find in the scrambled letters 
// return true or false

function scramble(str1, str2) {
  const splitWord = str2.split('')
  const splitLetters = str1.split('').sort()
  let same = []
  
  splitWord.forEach(letter => {
    if (splitLetters.includes(letter)) {
      let idx = splitLetters.indexOf(letter)
      same.push(splitLetters.splice(idx, 1))
    }
  })
  
  if (same.join('') === str2) {
    return true
  }
  return false
  
}
