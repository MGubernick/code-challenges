// implement a function to remove duplicates from an array and returning an array of only unique elements
// test case:
const arr1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

function uniqueArray(arr) {
  // create a hashTable (hashMap)
  let hashMap = {}
  // create an empty array to push unique elements to
  let uniqueArr = []

  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // check to see if the hashMap has the element at arr[i]
    if (!hashMap.hasOwnProperty(arr[i])) {
     // if it does NOT -> push arr[i] to the uniqueArr array
      uniqueArr.push(arr[i])
      // add the element to the hashMap as well
      hashMap[arr[i]] = i
    }
  }
  // return the uniqueArray
  return uniqueArr
}


// Test for me: 
const w1 = 'pepper'
const w2 = 'pounce'

function output(word1, word2) {
  let m = word1.split('')
  let n = word2.split('')
  // create a hashTable (hashMap)
  let hashMap = {}
  let hashMap2 = {}
  // create an empty array to push unique elements to
  let uniqueArr = []
  let outArr = []

  // loop through the array
  for (let i = 0; i < m.length; i++) {
    // check to see if the hashMap has the element at arr[i]
    if (!hashMap.hasOwnProperty(m[i])) {
     // if it does NOT -> push arr[i] to the uniqueArr array
      uniqueArr.push(m[i])
      // add the element to the hashMap as well
      hashMap[m[i]] = 1
    } else {
      hashMap[m[i]] = hashMap[m[i]] + 1
    }
  }

  for (let j = 0; j < n.length; j++) {
    if (!hashMap2.hasOwnProperty(n[j])) {
      uniqueArr.push(n[j])
      hashMap2[n[j]] = 1
    } else {
      hashMap2[n[j]] = hashMap2[n[j]] + 1
    }
  }

  for (const [key, value] of Object.entries(hashMap)) {
    // console.log('key', key)
    // console.log('value', value)
    if (value % 2 !== 0) {
      outArr.push(key)
    }
  }
  
  for (const [key, value] of Object.entries(hashMap2)) {
    if (value % 2 !==0) {
      outArr.push(key)
    }
}
  // return the uniqueArray
  console.log('this is hashMap', hashMap)
  console.log('this is hashMap2', hashMap2)
  // console.log('this is outArr', outArr)
  return outArr.length
}
