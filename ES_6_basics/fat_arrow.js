// var add = function(x,y){
//     return x+y
// }

// var add = (x,y) =>{
//     return x+y
// }

var add = (x,y) => x+y

console.log(add(10,20))

let numbers = [4,2, 6]

// numbers.sort(function(a,b){
//     return b-a
// })

numbers.sort((a,b) => b-a)

console.log(numbers)

let names = ['Scott', 'Adam', 'Tuan']

// let lengths = names.map(function(name){
//       return name.length
// })

let lengths = names.map(name => name.length)

console.log(lengths)


let logDocument = () => console.log(window.document)
logDocument()


//Line Break
let multiply = (x,y) =>
x*y

console.log(multiply(2,3))


// let setColor = function(color){
//     return { value : color }
// }

// let backgroundColor = setColor('Green')
// console.log(backgroundColor)

let setColor = (color) => {
    return { value : color }
}

let backgroundColor = setColor('Green')
console.log(backgroundColor)