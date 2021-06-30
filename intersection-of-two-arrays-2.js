var intersect = function(nums1, nums2) {
  let answer = []
  
    for (let i = 0; i < nums2.length; i++) {
           let currentVal = nums2[i]
           
           if (nums1.includes(currentVal)) {
               let splicedVal = nums1.splice(nums1.indexOf(currentVal), 1)
               
               answer.push(currentVal)
           }
    }
    return answer
};