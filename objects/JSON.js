var todo = {
    userId: 1,
    id: 1,
    title:'delectius rut auteum',
    completed : false
}

var JSONobj = {
    "userId" : 1,
    "id" : 1,
    "title" : "delectius rut auteum",
    completed : false
}

console.log(todo)

console.log(JSONobj)


//JSON Stringify
var JSONStringify = JSON.stringify(JSONobj)

console.log(JSONStringify, typeof JSONStringify)

//JSON Parse

var JSONParse = JSON.parse(JSONStringify)
console.log(JSONParse, typeof JSONParse)