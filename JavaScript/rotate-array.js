var rotate = function(nums, k) {
  k = k % nums.length
  nums.unshift(...nums.splice(-k))
};