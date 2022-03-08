// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this)
//         setTimeout(function(){
//             console.log(this)
//             console.log(this.id)
//         }, 1000)
//     }
// }

// employee.greet()


// var employee = {
//     id:1,
//     greet: function(){
//         var self = this
//         console.log(this)
//         setTimeout(function(){
//             console.log(self)
//             console.log(self.id)
//         }, 1000)
//     }
// }

// employee.greet()

//using bind

// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this)
//         setTimeout(function(){
//             console.log(self)
//             console.log(self.id)
//         }.bind(this), 1000)
//     }
// }

// employee.greet()


//Using arrow function

var employee = {
    id:1,
    greet: function(){
        setTimeout(() =>{
            console.log(this)
            console.log(this.id)
        }, 1000)
    }
}

employee.greet()