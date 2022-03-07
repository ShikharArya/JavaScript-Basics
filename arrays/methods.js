//concat
var fruits = ["Apples", "Oranges", "Guava"]

var vegetables = ["Potato", "Tomato", "Egg Plant"]


var mixOne = fruits.concat(vegetables)
//console.log(mixOne)


//JOIN - Array -> string values
var movies = ["Avatar", "Good Will Hunting", "MARS"]

var movieString = movies.join(",")

//console.log(movieString)

var movieString_space = movies.join(" ")
//console.log(movieString_space)

//SPLIT - String values -> Array

var fullName = "JOHN WICK"
var array = fullName.split("")
var space = fullName.split(" ")

//console.log(array)
//console.log(space)

//PUSH, PUSH, SHIFT, UNSHIFT

var numbers = [1,2,3,4]
//console.log(numbers)

numbers.push(5)
//console.log(numbers)
numbers.push(6)
numbers.push(7)
//console.log(numbers)

numbers.shift()
numbers.shift()

numbers.pop()
//console.log(numbers)

numbers.unshift(0)
numbers.unshift(-1)
//console.log(numbers)


//Splice
//Modifies the array. Also overwrites the original array.

var fruits = ["Banana", "Orange", "Apple", "Mango"]

//Adds
fruits.splice(3,0, "Guava", "Dragonfruit")
console.log(fruits)

//Delete
fruits.splice(2,1)
console.log(fruits)


//Slice
// Returns selected elements from an array, and returns it
// as new array.

var names = ["Scott", "Adam", "Tuan", "Steve","John"]

var selectedNames = names.slice(1)

var rangeNames = names.slice(2,5)

console.log(selectedNames)
console.log(rangeNames)