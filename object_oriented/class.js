//Class
//No specific class keyword.

function Student(){

}


//Instance

function Person(){

}

var person1 = new Person()
var person2 = new Person()


//Constructor

function Order(){
    console.log('Order is initiated')
}

var order1 = new Order() //Order is the constructor

//Property

function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer('Male')
var customer2 = new Customer('Female')

console.log(customer1)