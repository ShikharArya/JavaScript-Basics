//Singleton is used to create a single instance of a class

// function DBConnection(){
//     console.log('Connection created')
// }

// var dbCon1 = new DBConnection()
// console.log(dbCon1)

// var dbCon2 = new DBConnection()
// console.log(dbCon1)

// var dbCon3 = new DBConnection()
// console.log(dbCon1)


var DBConnection = (function(){
    var connection = null

    var createConnection = function(){
        var obj = new Object()
        console.log('Connection is created')
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    var obj = {
        getConnection : getConnection
    }

    // OR var obj = { getcConnection }

    return obj
})()

console.log(DBConnection)