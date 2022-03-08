class Student {

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(params) {
        return this.firstName + ' ' + this.lastName    
    }

    getMessage(){
        return "Welcome to ES6 classes"
    }
}

let student1 = new Student('Scott', 'Destanik')

console.log(student1)
console.log(student1.firstName)
console.log(student1.firstName)
console.log(student1.getFullName())
console.log(student1.getMessage())