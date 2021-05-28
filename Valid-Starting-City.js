// optimal space & time complexity: O(n) time | O(1) space

// sample input:
distance = [5, 25, 15, 10, 15]
fuel = [1, 2, 1, 0, 3]
mpg = 10

// My Solution
// function validStartingCity(distance, fuel, mpg) {
//   const newFuel = []
//   let tank = 0
//  // multiply the fuel elements by the mpg
//  for (num in fuel) {
//    newFuel.push(num * mpg)
//  }

//  for (let i = 0; i < newFuel.length; i++) {
//    tank += fuel[i]
//    for (let j = 0; j < distance.length; j++) {
//      if (tank - distance[j] !== 0) {
//        j++
//      } else {
//        return j
//      }
//    }
//  }
// }

// Actual Solution
function validStartingCity(distance, fuel, mpg) {
  const numOfCities = distance.length
  let tank = 0

  let startingCityIndex = 0
  let milesRemainingAtStartingCity = 0

  for (let cityIdx = 1; cityIdx < numOfCities; cityIdx++) {
    const distanceFromPreviousCity = distance[cityIdx - 1]
    const fuelFromPreviousCity = fuel[cityIdx - 1]
    tank += fuelFromPreviousCity * mpg - distanceFromPreviousCity

    if (tank < milesRemainingAtStartingCity) {
      milesRemainingAtStartingCity = tank
      startingCityIndex = cityIdx
    }
  }
  return startingCityIndex
}
// Do not edit the line below.
exports.validStartingCity = validStartingCity;
