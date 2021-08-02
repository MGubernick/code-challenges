var isPalindrome = function(s) {
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  // make sting lowercase
  const lower = s.toLowerCase()
  const split = lower.split('')
  
  const clean = split.filter(function(letter) {
    return punctuation.indexOf(letter) === -1
  })
  
  const noPunc = clean.join('')
  const noPuncRev = clean.reverse().join('')
  const toCheck = noPunc.replace(/\s/g, '')
  const toCheckRev = noPuncRev.replace(/\s/g, '')
  
  if (toCheck === toCheckRev) {
    return true
  } else {
    return false
  }
    
};