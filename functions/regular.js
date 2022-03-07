function display(){
    console.log("Hello")
}

display()


function getName(){
    return "Scott"
}

var fullName = getName()
console.log(fullName)

console.log(getName())

function getValue(){
    console.log(10)
}

console.log(getValue())

function test(){
    return 1
    return "Scott"
}

console.log(test())
//prints 1 and not Scott. because the return scott becomes unreachable.

function one(){
    return{
        a : 1
    }
}

function two(){
    return
    {
        a : 1
    }
}

console.log(one())
//Prints a : 1
console.log(two())
//Prints undefined


function getFullName(){
    return "Scott" + " " + "Destnick"
}

console.log(getFullName())

function getFullName(firstName, lastName){
    return firstName + " " + lastName
}

console.log(getFullName())

function displayFullName(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(displayFullName('Scott', 'Destanik'))
console.log(displayFullName('Adam', 'Colson'))
console.log(displayFullName('Tuan', 'Bui'))
console.log(displayFullName('John'))
//prints john undefined
console.log(displayFullName('Scott', 'Destanik', 'Yanik'))
//prints scott destanik