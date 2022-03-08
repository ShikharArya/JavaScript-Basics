let arr = ["Scott", "Adam", "Tuan"]

let[name1, name2, name3] = arr

console.log(name1)
console.log(name2)
console.log(name3)

let [firstNamem, lastName] = "Scott Desatnik".split(' ')
console.log(firstNamem)
console.log(lastName)


let [fname, lname, title] = ["Scott", "Desatnik","Great Boss"]

console.log(fname)
console.log(title)

//Object 

let user = {
    fullName: 'Scott',
    city: 'Boston',
    age: 45
}

let {fullName, city, age} = user

console.log(fullName)
console.log(city)
console.log(age)


let options = {
    titles: "Menu",
    width : 100,
    height : 100
}

let {titles, width, height} = options

console.log(title)
console.log(width)
console.log(height)