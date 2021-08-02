var hammingWeight = function(n) {
  let count = 0
  let s = n.toString(2)
  const ss = s.split('')
  // console.log('this is ss: ', ss)
  
  ss.forEach(num => {
    if (num === '1') {
      count++
      // console.log('count: ', count)
    }
  })
  return count
};