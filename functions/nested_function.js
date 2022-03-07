function One(){
    return function two(){
        return function three(){
            return "This is a nested function"
        }
    }
}

// First method to call the nested functions
var first = One()
var second = first()
var third = second()
console.log(third)


//Second method to call the nested function using single line.
console.log(One())
console.log(One()())
console.log(One()()())


function display() {

    var hello = function(){
        console.log("Hello is invoked")
    } 

    hello()
}
display()

var obj = {
    name: "Scott",
    getName: function(){
        var self = this

        console.log(self.name)
        self.name = "Great Scott"
        console.log(self.name)

        var updateName = function(){
            self.name = "Scott Desatnik"
            console.log(self.name)
        }

        updateName()
        console.log(self.name)
    }
    
}


obj.getName()
console.log(this.name)