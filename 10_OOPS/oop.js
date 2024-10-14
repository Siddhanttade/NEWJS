const user={
    username:"siddhant",
    mail:"sidgamil.com",
    signedIn:"true",

    getUserDetails: function(){
       // console.log("got details from db");
       // console.log(`username:${this.username}`); //it is important because in this function it refers the above username because the code we write goes on browser or node and there username maybe different 
        console.log(this)       //here we get our req obj 
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);      //here we would get empty value because global context comes into play

//this keyword is useful for latest context 

//const promiseOne=new Promise here new is constructor function and it is helpful for creating different instances from single object literal

function User(username,loginCount,isLoggedIn){
    this.username=username                  //here lhs is our variable and in rhs we passed on the value
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this;        //it is implicitly defined not necessary to write everytime
}

const userOne=new User("sid","19",true)
 const userTwo=new User("chai","20",false) //this statement will overwrite userOne everytime so it is necessary to always use new keyword after writing new no issues 
console.log(userOne.constructor);          //constructor property is reference to self 
//console.log(userTwo);


//Notes about new : 1.Whenever we use it an empty object is created which is called instance 2.constructor function is called due to this keyword 3.The constructor packs All the arguments and returns it to us 4.We get all the arguments in function 

