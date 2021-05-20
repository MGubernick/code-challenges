// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let itr = 1
  // find the last num
  let lastNum = digits[digits.length - itr]
  // console.log('this is digits', digits)
  // if the last digit isn't a 9 add 1 to last digit
  if (lastNum !== 9) {
    digits[digits.length - itr] += 1
    // console.log('this is digits', digits)
  } else {
    // loop backwards 
    for (let i = digits.length - 1; i >= 0; i--) {
      if (i === 0 && digits[i] === 9) {
        // make 9 a 0
        digits[i] = 0
        // append a 1 to the beginning of array
        digits.unshift(1)
        // console.log('this is digits', digits)
        // end loop
        break
      }
      // if lastNum is 9
      if (digits[i] === 9) {
        // change 9 to 0
        digits[i] = 0
        
      } else {
        digits[i]++
        break
      }
    }
  }
  return digits
};


// ALT: 
// const plusOne = digits => String(BigInt(digits.join('')) + BigInt(1)).split('').map(Number)