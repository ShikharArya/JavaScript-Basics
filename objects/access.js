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

var studentSeal = {
    firstName : "Adam",
    lastName : "Livine",
    city: 'Boston',
    age: 35
}


Object.seal(studentSeal)

studentSeal.email = 'adam@ef.com'
studentSeal.city = 'Pasadena'
delete studentSeal.age 
console.log(studentSeal)




//Freeze

var studentFreeze = {
    firstName : "Adam",
    lastName : "Livine",
    city: 'Boston',
    age: 35,
    address:{
        state:'Washington'
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)



studentFreezeemail = 'adam@ef.com'
studentFreeze.city = 'Pasadena'
studentFreeze.address.city = 'Florida'
delete studentFreeze.age 
console.log(studentFreeze)


//If we stringify and parse, then we can change the data.