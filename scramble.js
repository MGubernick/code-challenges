// str1 = scrambled letters (any number)
// str2 = word to find in the scrambled letters 
// return true or false

function scramble(str1, str2) {
  //   console.log('str1: ', str1)
    console.log('str2: ', str2)
    const splitWord = str2.split('')
    const splitLetters = str1.split('').sort()
    let same = []
    
    splitWord.forEach(letter => {
      if (splitLetters.includes(letter)) {
        same.push(letter)
        console.log('same: ', same.join(''))
      }
    })
    if (same.join('') === str2) {
      return true
    }
    return false
    
  }