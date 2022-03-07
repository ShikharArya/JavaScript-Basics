var data = [
    1,
    "scott",
    true,
    null,
    undefined,
    {name : 'adam'},
    function(name){
        return name
    },
    ["red", "blue", "green"]
]

console.log(data)

console.log(data[6](data[5].name))
console.log(data[6](data[7][1]))

console.log(data[5].name + " likes " + data[7][1])