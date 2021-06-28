var singleNumber = function(nums) {
  // create a hash table
  let hm = {}
  // set a variable for answer
  let answer
  
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the number is not already in the hm - add it
    if (!hm.hasOwnProperty(nums[i])) {
      hm[nums[i]] = 1
    } else {
      // if it is already there, add 1
      hm[nums[i]] = hm[nums[i]] + 1
    }
  }
  
  // look at the hm and see which number only occured once - this is answer 
  for (const [key, value] of Object.entries(hm)) {
    if (value === 1) {
      answer = key
    }
  }
  return answer
};