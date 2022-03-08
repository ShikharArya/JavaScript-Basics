/**
 *  ... spread operator - unpacks the elements of the array
 *  
 *  ... rest operator - packs the elements into array
 */


//Spread

const odd = [3 ,5, 7, 9]
const combined = [2,4,6, ...odd]
console.log(combined)


//Rest (...arguements should be placed in the last)

function display(a,b, ...arguements){
    console.log(arguements)
}

display(1,2,3,4,5,6)

//Constructing an array literal

let intialChars = ['A', 'B']
let chars = [...intialChars, 'C', 'D']
console.log(chars)

let numbers = [1,2]
let morenumbers = [3, 4]

let allNumbers = [...numbers, ...morenumbers]
console.log(allNumbers)


//Copy an array
let scores = [80, 70, 90]

let copiedScores = [...scores]
console.log(copiedScores)

//spread operator and string

let newChars = ['A', ...'BCDEF', 'H']
console.log(newChars)



//