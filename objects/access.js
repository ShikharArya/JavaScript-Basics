var person = { 
    firstName : "Scott",
    lastName : "Desatnik",
    city: "Boston",
    age: 40
}

person.email = 'scott@ef.com'   //CREATE
console.log(person) 

person.city = 'Florida'   //UPDATE
console.log(person)

delete person.age // DELETE
console.log(person) // READ


var student = {
    firstName : "Adam",
    lastName : "Livine",
    city: 'Boston',
    age: 35
}


// Prevent Extensions
Object.preventExtensions(student)

student.email = 'adam@ef.com'
student.city = 'Pasadena'
delete student.age 
console.log(student)






// Seal

var student = {
    firstName : "Adam",
    lastName : "Livine",
    city: 'Boston',
    age: 35
}


Object.seal(student)

student.email = 'adam@ef.com'
student.city = 'Pasadena'
delete student.age 
console.log(student)




//Freeze

var studentFreeze = {
    firstName : "Adam",
    lastName : "Livine",
    city: 'Boston',
    age: 35
}



Object.freeze(student)

student.email = 'adam@ef.com'
student.city = 'Pasadena'
delete student.age 
console.log(student)
