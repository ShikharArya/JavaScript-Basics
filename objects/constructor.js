function Student(){
    this.firstName = 'Scott'
    this.lastName = 'Desatnik'
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

//var studentObj = Student() returns undefined
var studentObj = new Student()
console.log(studentObj)

console.log(studentObj.getFullName())

//But using new creates a new instance of the student.