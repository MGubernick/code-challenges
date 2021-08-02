// sample input: 
// path = "/foo/../test/../test/../foo//bar/./baz"

// expected output: 
// "/foo/bar/baz" -> equivalent to the input path

// Their Solution: (my pseudocode)

function shortenPath(path) {
  // the path should start with a '/' to be a valid path
  const startsWithSlash = path[0] === '/'
  // split the path by '/' and use a helper function to check if it
  // is an important element
  const splitPath = path.split('/').filter(importantElements)
  // declare an empty stack
  const stack = []

  // check to see if the path starts with a '/' if so, push to the stack
  if (startsWithSlash) stack.push('')
  // look at each element in the new splitPath
  for (const element of splitPath) {
    // if the element === '..' -> if the stack doesn't have anything in it yet OR it ends with a '..'
    if (element === '..') {
      if (stack.length === 0 || stack[stack.length - 1] === '..') {
        // push the element to the stack
        stack.push(element)
        // else if the element in last index of the array isn't empty, pop the element off the array
      } else if (stack[stack.length - 1] !== '') {
        stack.pop()
      }
    } else {
      // otherwise push the element to the stack
      stack.push(element)
    }
  }
  // if the stack length is 1 and the 1 element is '', return a '/'
  if (stack.length === 1 && stack[0] === '') return '/'
  // join the stack array back into a string
  return stack.join('/')
}

// write a helper function to check to see if an element in the splitPath has a longer length than 1 and isn't just a single '.'
// if it isn't '' or '.', it is  important. 
function importantElements(element) {
  return element.length > 0 && element !== '.'
}

// Do not edit the line below.
exports.shortenPath = shortenPat


// function shortenPath(path) {
//   let pathArray = path.split('/')
//   let absolute = false
//   if (path[0] === '/') {
//       absolute = true
//   }
//   for (let i = 0; i < pathArray.length; i++) {
//       if (pathArray[i] === '..') {
//           pathArray.splice(i, 1)
//           pathArray.splice(i - 1, 1)
//           i--
//       }
//       if (pathArray[i] === '.' || pathArray[i] === '') {
//           pathArray.splice(i, 1)
//       }
//   }
//   if (absolute === true) {
//       pathArray.unshift('')
//   }
//   // console.log(pathArray.join('/'))
//   return pathArray.join('/')
// }