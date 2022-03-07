var names = ["Scott", "Adam", "Tuan", "Steve", "John"]

//FOR loop
console.log("**************FOR LOOP***************")
for(var i=0;i<names.length;i++){
    console.log(i, names[i])
}

//forEach

console.log("**************FOR EACH LOOP***************")

names.forEach(function(name, index){
    console.log(name, index)
});

//map

console.log("**************MAP LOOP***************")
names.map(function(name, index){
    console.log(name, index)
})

var customerListOne = names.forEach(function(name,index){
    return name + index
})

var customerListTwo = names.map(function(name,index){
    return name + index
})


var customerListThree = names.map(function(name,index){
    return {id : index, name:name}
})

console.log(customerListOne)
console.log(customerListTwo)
console.log(customerListThree)


var products = ["Desktop", "Laptop", "Mobile", "IPad"]


//FOR in

console.log("**************FOR IN/OF LOOP***************")

for( var index in products){
    console.log(index)
}

for(var item of products){
    console.log(item)
}

for(var [index, item] of Object.entries(products)){
    console.log(index + " " + item)
}


console.log("**************WHILE LOOP***************")
var i =0;
while(i < products.length){
    console.log(products[i])
        i++;
}