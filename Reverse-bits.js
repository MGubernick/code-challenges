var reverseBits = function(n) {
  let t = n.toString(2).split('').reverse().join('')
  
  while (t.length < 32) {
    t = t + '0'
  }
  
  return parseInt(t, 2)
};