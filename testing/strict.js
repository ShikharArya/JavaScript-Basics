'use strict'
console.log(this)

function sample(){
    var self = this
    console.log(self)
}

sample()
sample.bind(this)()