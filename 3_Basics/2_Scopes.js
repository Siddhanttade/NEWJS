//var is not used to declare variables because it causes problem in scope of function
let a=10
const b=1
var c=10

if(true){       //this is the block scope of if statement
    let a=10
    const b=1
    var c=100
}

console.log(a)
console.log(b)
console.log(c)


function one(){
    const username="siddhant"

    function two(){                 //two can acces the variables of one but one cant do so with two
        const website="youtube"
        console.log(username)
    }
    two()
}

one()

if(true){
    const username="siddhant"
    if(username==="siddhant"){
        const website=" youtube"
        console.log(username+website)
    }
    //console.log(website)      this wont be possible because out of scope use of website variable
    
}
//console.log(username)     same case with username variable

//Important 
//both of these are ways to declare function
console.log(add1(5))
function add1(num){
    return num+1;
}


// console.log(add2(5))
const add2=function(num){   //when we declare function in this manner we cant give it a call before declaration which we have done in the above example of declaring functtion this is called hoisting
    return num+2;
}

console.log(add2(5))