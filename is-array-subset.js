// LOOPS

// test case 
let arr1 = [11, 1, 13, 21, 3, 7]
let arr2 = [11, 3, 7, 1]

// should return true

let arr1L = arr1.length
let arr2L = arr2.length

// if (isSubset(arr1, arr2, arr1L, arr2L))
//   console.log('arr2[] is ' + 'subset of arr1[]')
// else
//   console.log('arr2[] is ' + 'not a subset of arr1')

    function isSubset(arr1, arr2, arr1L, arr2L) {
    // define i & j before looping through the arrays
    // this is needed to check if the loop was not broken
      let i = 0
      let j = 0
    // loop through the first array
      for (i = 0; i < arr2L; i++) {
      //loop through the second array with a nested loop
          for (j = 0; j < arr1L; j++)
      // check to see if all elements from arr2 === those from arr1
              if (arr2[i] === arr1[j])
        // if these do match, break the loop
                 break;
          // if the inner loop was not broken (because arr2[i] isn't in arr1)
          // then return false 
             if (j === arr1L)
                 return false
    }
      // if the inner loop was broken, then all elements in arr2 are 
      // present in arr1
      return true
  }


  // SORTING & BINARY SEARCH

  function isSubset(arr1, arr2, arr1L, arr2L) {
    let i = 0
    let j = 0
 
    if (arr1L < arr2L)
        return 0
 
    // Sort both the arrays
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
 
    // Iterate till they doesn't exceed their sizes
    while (i < arr2L && j < arr1L)
    {
         
        // If the element is smaller than
        // Move ahead in the first array
        if (arr1[j] < arr2[i])
            j++
             
        // If both are equal, then move
        // both of them forward
        else if (arr1[j] == arr2[i])
        {
            j++
            i++
        }
 
        // If we don't have a element smaller
        // or equal to the second array then break
        else if (arr1[j] > arr2[i])
            return 0
    }
    return (i < arr2L) ? false : true
}
 
// Driver Code
let arr1 = [ 11, 1, 13, 21, 3, 7 ]
let arr2 = [ 11, 3, 7, 1 ]
 
let arr1L = arr1.length
let arr2L = arr2.length
