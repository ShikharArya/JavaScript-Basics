function sayHello(message){
    return function(name){
        return message + name
    }
}

var wishMe = sayHello("Welcome")

console.log(wishMe)

var message = wishMe(' Scott!!')

console.log(message)