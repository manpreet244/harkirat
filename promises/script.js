const fs = require('fs');

function myFunc(){
    console.log("Inside function")
    return new Promise (function(resolve){
        console.log("inside promise")
        fs.readFile("a.txt" ,"utf-8",function(err, data){
            console.log("before resolve")
            resolve(data+"hiii");
        })
    })
}
function onDone(data){
    console.log(data);
}
console.log(myFunc())
myFunc().then(onDone);