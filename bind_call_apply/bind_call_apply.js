var person1 = {name:'Scott', skill:"Great Boss"}
var person2 = {name:'Adam', skill:"Business Analyst"}
var person3 = {name:"Tuan", skill:"Tech Boss"}

function display(){
    return this.name + ':' + this.skill
}

function show(message, city){
    return message + ' ' +
           this.name + ' ' +
           '!!  Welcome to ' + 
           city
}

var displayUsingBind = display.bind(person1)

console.log(displayUsingBind())

var displayUsingCall = display.call(person2)
console.log(displayUsingCall)

var displayUsingApply = display.apply(person3)
console.log(displayUsingApply)


var showUsingBind = show.bind(person1)
console.log(showUsingBind('Hello', 'Boston'))

var showUsingCall = show.call(person2, "Hola", "Prague")
console.log(showUsingCall)

var showUsingApply = show.apply(person3, ["Hey","Sydney"])
console.log(showUsingApply)