// sample input
matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41,42,44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
]
target = 44  // [3, 3]
// target = 33 // [2, 3]

// my solution
function searchInSortedMatrix(matrix, target) {
  // iterate through the matrix and find the array that includes target (first number in the result)
  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].includes(target)) {
          for (let j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] === target) {
                  return [i,j]
              }
          }
      }
  }
  return [-1,-1]
}
// Do not edit the line below.
const _searchInSortedMatrix = searchInSortedMatrix;
export { _searchInSortedMatrix as searchInSortedMatrix };


// // their solution
// function searchInSortedMatrix(matrix, target) {
//   let row = 0;
//   let col = matrix[0].length - 1;

//   while (row < matrix.length && col >= 0) {
//     if (matrix[row][col] > target) {
//       col--;
//     } else if (matrix[row][col] < target) {
//       row++;
//     } else {
//       return [row, col];
//     }
//   }
//   return [-1,-1];
// }

// exports.searchInSortedMatrix = searchInSortedMatrix;
