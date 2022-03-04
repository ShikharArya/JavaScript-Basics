function b(){
    var x
}

function a(){
    var x=2
    b()
}

function c(){
    x = 3
}

var x = 1;

console.log(x)
// output = 1
a()
console.log(x)
// output = 1

c()
console.log(x)
//output = 3
