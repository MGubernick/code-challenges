var isAnagram = function(s, t) {
  let ht1 = {}
  let ht2 = {}
    
  const sSplit = s.split('').sort()
  const tSplit = t.split('').sort()
    
  for (let i = 0; i < sSplit.length; i++) {
    if (!ht1.hasOwnProperty(sSplit[i])) {
      ht1[sSplit[i]] = 1
    } else {
      ht1[sSplit[i]] = ht1[sSplit[i]] + 1
    }
  }
  
  // console.log('ht1: ', ht1)
  
  for (let j = 0; j < tSplit.length; j++) {
    if (!ht2.hasOwnProperty(tSplit[j])) {
      ht2[tSplit[j]] = 1
    } else {
      ht2[tSplit[j]] = ht2[tSplit[j]] + 1
    }
  }
  
  // console.log('ht2', ht2)
  
  if (Object.entries(ht1).toString() ===  Object.entries(ht2).toString()) {
    return true
  } else {
    return false
  }
  
};