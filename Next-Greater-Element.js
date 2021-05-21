// sample input:
array = [2, 5, -3, -4, 6, 7, 2]

function nextGreatestElement(arr) {
  // result should be a new array with the same number of elements
  // however, each element should be the next largest number in the array
  // if this does not exist, -1
  const result = new Array(arr.length).fill(-1)
  const stack = []

  // create a for loop to loop through the array (the length should be twice the length of the original (making it circular))
  for (let i = 0; i < 2 * arr.length; i++) {
    // declare the circular index. Set equal to the index MOD array length (allowing the the loop to read in a circle)
    const circularIdx = i % arr.length

    // create a while loop to run while the stack length is greater than 0
    // AND the last number in the array is less than the element at the circularIdx index
    while (stack.length > 0 && arr[stack[stack.length -1]] < arr[circularIdx]) {
      // define the top of the stack
      const top = stack.pop()
      // change the -1 in the new 'result' array to the element located at the 
      // circularIdx index in the incoming array
      result[top] = arr[circularIdx]
    }

    // push the circularIndex element into the stack
    stack.push(circularIdx)
  }
  
  // return the new 'result' array
  return result
}

