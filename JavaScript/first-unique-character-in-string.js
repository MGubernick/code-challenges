var firstUniqChar = function(s) {
  let answer = []
  let index
  let output
  let ht = {}
  const split = s.split('')
  
  for (let i = 0; i < split.length; i++) {
    if (!ht.hasOwnProperty(split[i])) {
      ht[split[i]] = 1
    } else {
      ht[split[i]] = ht[split[i]] + 1
    }
  }
  
  for (const [key, value] of Object.entries(ht)) {
    if (value < 2) {
      answer.push(key)
      index = answer[0]
      output = s.indexOf(index)
    } else if (answer.length === 0) {
      output = -1
    }
     }
  return output
};