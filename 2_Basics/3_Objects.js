const mySym=Symbol("Key1");

const jsUser={
    name:"siddhant",
    email:"siddhanttade19",
    [mySym]:"myKey1",//this is a symbol
    isLoggedIn:"false",
    "fullname":"siddhant tade",
}

//2 ways to acccess keys from object
console.log(jsUser.name); //always use htis notations for exceptions use the notation given below
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullname"]);
console.log(jsUser[mySym]) //syntax to access symbol remember this because it is a special case

jsUser.email="siddhanttade20"
// Object.freeze(jsUser)           //this method stops the further propogation of changes in the object
jsUser.email="siddhanttade2e3846"

console.log(jsUser)

jsUser.greeting=function(){
    console.log("heloo JS user");
}

console.log(jsUser.greeting) //this gives output function anonymous because we only have the function reference and function is not executed
console.log(jsUser.greeting());//required output is obtained

jsUser.greeting2=function(){
    console.log(`heloo JS user ${this.name}`);
}

console.log(jsUser.greeting2());



