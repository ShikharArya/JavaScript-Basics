//Private method

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }
// })

// console.log(Module())


// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }

//     return {
//         publicMethod : function(){
//             return { 
//                 publicMethod : publicMethod
//             }
//         }
//     }
//     })

// console.log(Module())


//Anonymous
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }

//     return {
//         publicMethod : function(){
//             return 'This is the public method'
//         }
//     }
//     })

// console.log(Module())


//Revealing methods
var Module = (function(){

    var privateMethod = function(){

    }

    var someMethod = function(){

    }

    var anotherMethod = function(){

    }

    return{
        some : someMethod,
        another : anotherMethod
    }
})()

console.log(Module)


//Accessing Priavte Methods

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }
})()

Module.publicMethod('I am able to access the private method')