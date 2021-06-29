// using Map() data structure

var containsDuplicate = function(nums) {
  let newNums = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!newNums.has(nums[i])) {
      newNums.set(nums[i], 1)
    } else {
      newNums.set(nums[i], (newNums.get(nums[i])) + 1)
    }
  }
  
  for (const [key, value] of newNums) {
    if (value > 1) {
      return true
    }
  }
  return false
};