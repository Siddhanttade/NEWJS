//Promise creation
//Always remember Promise is an object
const promiseOne=new Promise(function(resolve,reject){ //earlier bluebird or Q were used for async programming
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('async task is complete'); 
        resolve()   //when i write resolve then only the promise is consumed means earlier the task is completed and then it is resolved      
    },1000)
})

promiseOne.then(function(){             //this takes argument from above promise and .then() is linked with resolve and reject
    console.log("promise consumed");  
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 completed");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"siddhant",mail:"chsi.gmail"})        //this resolve() is helpful for taking values and parameters then these values are passed into the function written below[.then()]
    },1000)
})

promiseThree.then(function(user){       //.then takes the above value
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"siddhant",mail:"player"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})


//Chaining
promiseFour.then((user)=>{      //the data from this is stored 
    console.log(user);
    return user.username    
}).then((username)=>{           //.then() takes the data from above .then()
    console.log(username);
}).catch(function(error){       //.catch() used for error control
    console.log(error);
}).finally(()=>{                //.finally() it is default present there
    console.log("promise either resolved or rejected");    
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",mail:"player"})
        }
        else{
            reject("ERROR:JS went wrong")
        }
    },1000)
})

//async await it cant handle errors directly
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);}
    catch(error){
        console.log(error);       
    }
}

consumePromiseFive()    //if above present error is false promise would be consumed and if it is true then there is no mechanism to handle errors directly

// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //the above reponse in string and converted in json
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
//getAllUsers()

//.then,.catch  //refer the history of fetch if needed from logrocket blog
//The fetch() global function is a Web API method used to fetch resources (e.g., JSON data, images, or HTML) from a server. It returns a promise that resolves with a Response object, which contains the server’s response to the request.
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error); 
})

