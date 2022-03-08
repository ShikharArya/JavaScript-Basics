class Shape {
    constructor(){

    }

    draw(){
        return "I am a generic shape"
    }
}

class Circle extends Shape {
    constructor(){
        super()
    }

    draw(){
        return "I am a circle"
    }
}

let circle = new Circle

console.log(circle.draw())