// multiply (x)*(y)*(z)

function multiply(x){
    return function(y){
       return function(z){
           return x*y*z
       }
    }
}

// console.log(multiply(2)(3)(4))

// var a = 10
// var b = a
// a = 20

// console.log(a)
// console.log(b)

// var a = [1,2]
// var b = a
// a.push(3)

// console.log(a)
// console.log(b)

// var a = [1, 2]
// var b = a
// a = [1, 2, 3]
// console.log(a)
// console.log(b)


var output = (function(x){
    delete x //Delete only works with objects
    return x
})(1)

//console.log(output)


var output = (function(x){
    delete x //Delete only deletes the properties of an object
    return x
})({a:5})

var output = (function(x){
    delete x.a //This will delele the value
    return x
})({a:5})

// var output = (function(x){
//     delete x.a //This will delele the value
//     return x.a  //returns undefined
// })({a:5})
// console.log(output)

// //Conditionals
// var totalAmmount = 100000
// if(totalAmmount > 400000){
//     console.log('There is sufficient balance')
// }else if(40000 >totalAmmount > 250000){
//     console.log('There is some balance')
// }else{
//     console.log('There is no balance')
// }


var array = ['a', 'b', 'c', 'd', 'e', 'f']
//console.log(array)
//Empty the array

//Method 1
// array.splice(0, array.length)
// console.log(array)

//Method 2
// var array = []
// console.log(array)

//Method 3
// while (array.length != 0){
//     array.pop()
// }

//Method 4
// var count = array.length
// for(var i=0; i<count;i++){
//     array.pop()
// }

// //Method 5
// array.length = 0
// console.log(array)


// function evenOrodd(param){
//     if(param%2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(evenOrodd(5))
// console.log(evenOrodd(4))
// console.log(evenOrodd(10))

// function evenOrodd(a){
//     return a%2 == 0
// }

// console.log(evenOrodd(5))
// console.log(evenOrodd(4))
// console.log(evenOrodd(10))


//' == ' & ' === '
console.log(1==1) //True
console.log(1=='1')  // True
console.log(1==='1')  // False

//This is because == only checks for the value
// But === checks for both value and typeof()


//Method 1

// function extractExtension(fileName){
//     console.log(fileName.split("."))
//     if(fileName.split('.').length > 1){
//         return fileName.split('.')[1]
//     }else{
//         return false
//     }
// }

//Method 2

// function extractExtension(fileName){
//     return fileName.split('.').length > 1 ? fileName.split('.')[1] : false
// }
// console.log(extractExtension("resume.doc")) //doc
// console.log(extractExtension("bangalore.txt")) //doc
// console.log(extractExtension("notepad")) //doc


    