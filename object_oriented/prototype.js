// function Student(){
//     this.name = 'John',
//     this.gender = 'Male'
// }

// var stuObj1 = new Student()
// console.log(stuObj1)

// var stuObj2 = new Student()
// console.log(stuObj2)


// function Student(){
//     this.name = 'John',
//     this.gender = 'Male'
// }

// Student.prototype.age = 35

// var stuObj1 = new Student()
// console.log(stuObj1)

// var stuObj2 = new Student()
// console.log(stuObj2)



// function Student(){
//     this.name = 'John',
//     this.gender = 'Male'
// }

// var stuObj = new Student()

// console.log(Student.prototype)
// console.log(stuObj.prototype) // This is undefined

function Customer(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

Customer.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Customer.prototype.city = 'Boston'

var customer1 = new Customer('Scott', 'Desatnik')
var customer2 = new Customer('Adam', 'Livine')

console.log(customer1)
console.log(customer1.getFullName())

console.log(customer2)
console.log(customer2.getFullName())

