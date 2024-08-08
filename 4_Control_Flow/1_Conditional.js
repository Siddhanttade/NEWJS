//var is global variable therefore it isnt used that much

const score=200;

// if(score>100) console.log("hello"); console.log("hi") this is implicit way to write the code but do not prefer this   

const userLoggedIn=true;
const debitCard=true;
const loggedinfromgoogle=false;
const loggedinfrommail=true;

if(userLoggedIn && debitCard){
    console.log("logged in")
}

if(loggedinfromgoogle || loggedinfrommail){
    console.log("can access");
    
}