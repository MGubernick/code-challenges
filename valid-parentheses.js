var isValid = function(s) {
  // arr to push the opening braes too
  let arr = []
    // map of valid pairs
  let map = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
    }
    // loop thorugh the string
    for (let i = 0; i < s.length; i++) {
      // if the brace is an opeing brace - push to the new array
      if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
        arr.push(s[i])
        // console.log('arr: ', arr)
        // if the current brace is a closing brace - pop the brae from the array
      } else {
        let end = arr.pop()
        
        // if the last element from the string doesn't match the last element in the array - return false
        if (s[i] !== map[end]) {
          return false
        }
      }
    }
  // also, if the length of the array after the loop finishes is not 0 - return false (there are too many braces in this case)
  if (arr.length !== 0) {
    return false
  }
  // otherwise, return true 
    return true
};