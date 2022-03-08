//ES6 fix
function say(message){
    console.log(message)
    message = typeof message !== 'undefined' ? message : 'Hi'
}

say()

function say(message="Hi"){
    console.log(message)
}

say()

function say(message="Hi"){
    console.log(message)
}

say('hey')