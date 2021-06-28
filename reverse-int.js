var reverse = function(x) {
  const split = x.toString().split('')
  const reverse = split.reverse()
  const newNum = reverse.join('')
  const answer = parseInt(newNum) * Math.sign(x)
  
  if (answer < -2147483648 || answer > 2147483647) {
      return 0
      } else {
      return answer
      }
};