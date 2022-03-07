var person = Object.create(null)

//var person = Object.create({})
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

//console.log(person)

var student = Object.create({
    firstName: "Scott",
    lastName : "Desatnik"

})

console.log(student.firstName)
console.log(student.lastName)

var customer = {}

Object.defineProperty(customer, 'firstName', {value: 'Adam'})
Object.defineProperty(customer, 'lastName', {value: 'Livine'})
Object.defineProperty(customer, 'city', {value: 'Boston'})
Object.defineProperty(customer, 'age', {value: 20})

console.log(customer)
