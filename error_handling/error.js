// try{
//     // Code that may or may not throw errors
// } catch (ex){
//     // Code to be executed if an error occurs
// } finally {
//     // Code to be executed regardless of an error
// }


// try {
//     var output = getMessage('Hello', 'Steve')
// } catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error)
// } finally{
//     //Code clean up can be done here
//     //Close DB connections
//     //Close Network Connections
//     console.log('This code will get executed always irrespective of the error is caught or not')
// }

// try {
//     throw "Error Occured"
// } catch(ex){
//     console.log(ex)
// }

//throw is used to display logical errors

try {
    var student_count = 2
    if(student_count > 1){
        throw{
            id : 101,
            message : 'There are duplicate records for this id'
        }
    }
}catch(ex){
    console.log(ex)
}