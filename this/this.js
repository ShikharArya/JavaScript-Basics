console.log(this)
//prints window

function sample(){
    console.log(this)
}
//prints window

var obj = {
    id: 1,
    getId: function(){
        console.log(this)
        //prints id: 1   getId : f
    }
}

obj.getId()