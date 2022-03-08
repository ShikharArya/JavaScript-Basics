// function sample(){
//     var foo = "blue"
//     console.log(foo)
// }

// sample()
// console.log(foo)

//Output - Blue and Undefined


function display(){
    if(1==1){
        var foo = "Hello"
        let bar = "How are you?"
        const baz = "I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)

    }

    
    console.log(foo)
    //console.log(bar) // Reference Error bar is not defined
    //console.log(baz) // Reference Error baz is not defined
}

display()

//Always try to use let in for loops
for(let amount=0; amount<3;amount++){
    console.log(amount)
}

//console.log(amount) //Reference Error amount undefined


let a = 10
b =20
a = 50

console.log(a)
