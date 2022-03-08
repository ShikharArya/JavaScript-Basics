//Polymorphism

/**
 * Polymorphism - function existing in several forms
 * Function overloading is not possible in javascript
 */

function Student(firstName, lastName){

}

function Student(firstName){

}

function Student(firstName, lastName, age){

}

Student('Scott', 'Desatnik')
//Only the last function is called irrespective of the 
// parameter's order or number.

//Shape - Parent Class

function Shape(){

}

Shape.prototype.draw = function(){
    return 'I am a generic shape'
}

//circle

function Circle(){

}

Circle.prototype = new Shape()

Circle.prototype.draw = function(){
    return 'I am a Circle'
}

//Square

function Square(){

}

Square.prototype = new Shape()

Square.prototype.draw = function(){
    return 'I am a Square'
}


//Triangle

function Triangle(){

}

Triangle.prototype = new Shape()

Triangle.prototype.draw = function(){
    return 'I am a Triangle'
}


// var shape = new Shape()
// console.log(shape.draw())

// var circle = new Circle()
// console.log(circle.draw())

// var square = new Square()
// console.log(square.draw())

// var triangle = new Triangle()
// console.log(triangle.draw())


var shapes = [new Shape(), new Circle(), new Square(), new Triangle()]

shapes.forEach(function(shape){
    console.log(shape.draw())
})