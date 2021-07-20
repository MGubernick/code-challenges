// could be a better solution
var missingNumber = function(nums) {
  let compNums = []
  const sorted = nums.sort((a,b) => a-b)
  // console.log('sorted: ', sorted)
  const largest = sorted[sorted.length - 1]
  let answer = largest + 1
  
  if (nums.length === 1 && nums[0] === 0) {
    answer = 1
  } else if (nums.length === 1 && nums[0] === 1) {
    answer = 0
  } 
  
  for (let i = 0; i <= largest; i ++) {
    compNums.push(i)
  }
  
  compNums.forEach(num => {
    if (!sorted.includes(num)) {
     answer = num
    }
  })
  return answer
};