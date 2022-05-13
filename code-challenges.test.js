// // ASSESSMENT 6: JavaScript Coding Practical Questions with Jest=
// // --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// // // a) Create a test with an expect statement using the variable provided.
describe("objectArray", () => { 
    it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
// // //     // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(objectArray(people)).toEqual("Ford Prefect is a hitchhiker")
    expect(objectArray(people)).toEqual("Zaphod Beeblebrox is president of the galaxy")
    expect(objectArray(people)).toEqual("Arthur Dent is a radio employee.")
  })
})
// // // // FAIL  week-6-assessment-ecostrong/code-challenges.test.js
// // // ● objectArray › Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// // //   ReferenceError: objectArray is not defined

// // // b) Create the function that makes the test pass.

//Psuedo Code
//the function will take in an array of objects, the function and returns a sentence about each person with their names capitlaized
// we will use a higher order function 
// will use. map to capitalize first letter of all the names
// will use.split inside of the key name .map. split the objects and capitalize first letter of each word
//use string interpolation with .map for the name and external .map for the occupation.
//need to access the key name to extract the values and extract occupation values in order to print job.
//will have to either split string and capitlize the first and last name of each of the two items in the array by mapping through it
//each name has a first and last name, so it is an object, will need to split the array in order to map through it. 
//

const nameArray = (array) => {
  let name = array.map(value => value.name)
  let splitName = name.map(value => value.split(" "))
   console.log(name)

  let capitalizedLetters = nameSplit.map(value => value.map(value => value[0].toUppercase() + value.slice(1)))
  let combinedName = capitalizedLetters.map(value => value.join(" "))
  let occupation = array.map(value => value.occupation)
  let nameOccupation = []
  for(let i =0; i< array.length; i++){
    nameOccupation.push(`${joinNames[i]} is a ${occupation[i]}`)
}
return nameOccupation.join(" ")
} 
console.log(nameArray(people)) 

const nameCapitalized = (array) => {
  let describe = array.map(value => {
    let capNames = value.name.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join("")
    return `${capNames} is a ${value.occupation}`
})
return describe 
// console.log(nameCapitalized(people))

// Not passing: I keep getting this syntax error at bottom of the page.
// SyntaxError: /Users/learnacademy/Desktop/MY WORK ZONE/bravo-assessments/week-6-assessment-ecostrong/code-challenges.test.js: Unexpected token (106:54)

// 104 | // ● arrayCubed › Create a function that takes in an array of numbers and returns the sum of all the numbers cubed
// 105 | //  ReferenceError: arrayCubed is not defined
// > 106 | // // b) Create the function that makes the test pass.


// // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// // a) Create a test with an expect statement using the variables provided.

describe("arrayRemainders", () => { 
      it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
      expect(arrayRemainders(numbersDivided1)).toEqual("2, 0, -1, 0 ")
      expect(arrayRemainders(numbersDivided2)).toEqual(" 2, 1, -1")
    })
  })

//   FAIL  week-6-assessment-ecostrong/code-challenges.test.js
//   ● arrayRemainders › Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//     ReferenceError: arrayRemainders is not defined

// // b) Create the function that makes the test pass.
// Psuedo Code
//Create a function that takes in an array of mixed data and returns an array of only the remainders divided by 3. 
//Will need to filter first in order to only extract the numbers from the mixed data array. 
//Will need to map over the array of numbers and divide by 3, to get the remainder of each number. 

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

const arrayRemainder = array => {
  let numbersOnly = array.filter(Number.isFinite)
  return numbersOnly.map(value => value % 3)
}
//  console.log(arrayRemainder(hodgepodge1)) 
// console.log(arrayRemainder(hodgepodge2))

const newRemainder = (array) => {
  return array.filter(value => typeof value ==='number').map(value => value % 3)
}

console.log(newRemainder(hodgepodge1))
console.log(newRemainder(hodgepodge2))

// PASS  week-6-assessment-ecostrong/code-challenges.test.js
// ● Console

//   console.log
//     [ 2, 0, -1, 0 ]

//     at Object.log (week-6-assessment-ecostrong/code-challenges.test.js:97:10)

//   console.log
//     [ 2, 1, -1 ]

// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// // a) Create a test with an expect statement using the variables provided.
describe("arrayCubed", () => { 
 it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
      const cubeAndSum1 = [2, 3, 4]
// // // // Expected output: 99
       const cubeAndSum2 = [0, 5, 10]
// // // // Expected output: 1125
       expect(arrayCubed(cubedSum1)).toEqual("2, 0, -1, 0 ")
       expect(arrayCubed(cubedSum2)).toEqual(" 2, 1, -1")
      })
})
// FAIL  week-6-assessment-ecostrong/code-challenges.test.js
// ● arrayCubed › Create a function that takes in an array of numbers and returns the sum of all the numbers cubed
//  ReferenceError: arrayCubed is not defined
// // b) Create the function that makes the test pass.

// Psuedo Code
// create a function that takes in the inputs of an array and returns the sum of all numbers cubed.
//Use the reduce() method to find or calculate the sum of an array of numbers.
//The reduce() method executes the specified reducer function on each member of the array resulting in a single output value, 

const sum = array.reduce(function(a,b) {
      return a + b;
}, 0);

console.log(sum)   
const numbersCubed = array.map(arrayItem => typeof arrayItem * 3).sum  
//Didn't work 

const numCubed =(numbers) => {
  let sum = 0; 
  //iterate through numbers 
  numbers.forEach((num) => {
    //add to sum the number cubed 
    sum+= num * num * num;
  });
  //return cubed sum
  return sum;
}
//Can't run test error on line 159  Jest encountered an unexpected token
