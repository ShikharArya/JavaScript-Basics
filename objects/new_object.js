var person = new Object()

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

console.log(person.address.state)
console.log(person.address.street)
console.log(person.getFullname())
console.log(person)
