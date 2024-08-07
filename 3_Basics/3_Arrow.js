const user={
    username:"siddhant",
    coursePrice:999,

    welcomeMsg:function(){
        console.log(`${this.username},welcome to course`);
        console.log(this)
    }
}

user.welcomeMsg()       //here siddhant would be our username
user.username="sam"
user.welcomeMsg()       //here sam would be our username

console.log(this);

// function chai(){        //this keyword cannot be used with in function it is useful with objects mostly
//     let username="siddhant"
//     console.log(this.username)
// }

// chai()

//const chai=function(){    //similar case will occur here also
//     let username="siddhant"
//     console.log(this.username)
// }

// chai()


//Arrow Functions
//explicit return
// const summation=(n1,n2)=>{       while using curly braces writing return word is urgent
//     return n1+n2;
// }

//Implicit return in arrow function
const summation=(n1,n2)=>(n1+n2)   //we can either use the paranthesis on the right side of arrow or avoid them but prefer using them because they help to declare object

const players=(n1,n2)=>({username:"sid"})
   
console.log(players());

console.log(summation(3,4));
