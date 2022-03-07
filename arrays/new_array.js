var students = new Array()

//Index of array starts with zero


students[0] = "Scott"
students[1] = "Adam"
students[2] = "Tuan"
students[3] = "John"

console.log(students)

console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[3])

//to get the length of the array
console.log(students.length)

var people = new Array(3)

people[0] = "Scott"
people[1] = "Adam"
people[2] = "John"
people[3] = "Steve"

console.log(people)
//returns 4, although we have predefined the length as 3
//because the array grows dynamically


var customers = new Array("Scott", "Adam", "Tuan")
console.log(customers)
customers[3] = "Steve"
console.log(customers)
