var person = { }

person["firstName"] = "Scott"
person["lastName"] = "Deatanik"

var cityName = "city"
person[cityName] = "Boston"


console.log(person["firstName"])
console.log(person["lastName"])
console.log(person.city)

person.address = new Object()

person.address.street = '1st Main'
person.address.state = 'Washington'

person.getFullName = function(){
    return this.firstName+ ' ' + this.lastName
}

// person.getFullName = function(){
//     return person.firstName+ ' ' + person.lastName
// }

// console.log(person.address.state)
// console.log(person.address.street)
// console.log(person.getFullName())
// console.log(person)


var student = {
    id : 1001,
    firstName : 'Scott',
    lastName : 'Desanik',
    isAdmin : false,
    details : null,
    branch : undefined,
    address : {
        state : 'Washington'
    }, 
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    },

    subjects: ['Maths', 'Physics', 'Chemistry']
}
console.log(student.firstName)
console.log(student.lastName)
console.log(student.getFullName())
console.log(student.id)
// console.log(student.isAdmin)

console.log(student)