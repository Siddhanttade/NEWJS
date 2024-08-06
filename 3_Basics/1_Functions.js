function addTwoNum(num1,num2){ //here num1 and num2 are parameters and passed at the time of defining function
    console.log(num1+num2)
}

//addTwoNum(3,4)//here 3 and 4 are argument and passed at the time of calling the function
//we can also declare a variable and store the result of function in it by calling the function 
// const result=addTwoNum(3,4) if we print this we get output 7 but it is not stored in result variable so the below given way is proper declaration and result would be undefined

function addition(numA,numB){
    let result=numA+numB;
    return result               //here we are using return which will help to return value stored in result
    console.log("sid")  //this code is inaccessible as it goes against the definition of function
    return numA+numB    //we can write the above code in this manner also
}

const result=addition(3,4)
// console.log(result)

function loginUserName(username="sam"){         //by writing sam we give a default username means if we dont pass any argument then sam will be our user
    if(username===undefined){                   //if(!username) it is also similar to the code written
        console.log("enter username plz")
        return                                  //this return helps to stop the code if the condition is executed properly
    }
    return `${username} just logged in`
}

console.log(loginUserName("siddhant"))      //if nothing passed undefined is printed

//shopping cart function
function cartCal1(...num1){
    return num1
}

console.log(cartCal1(200,300,400))

function cartCal2(val1,val2,...num1){
    return num1
}

console.log(cartCal2(200,300,400)) //the numbers 200 and 300 will be stored in val1 and val2 and 400 will be stored in num1 array

//objects in function

const user={
    username:"siddhant",
    priceofbat:"10000"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and bat price is ${anyobject.priceofbat}`)
}

handleObject(user)

//we can also pass an object directly in the function call rather than creating it seperately
handleObject({
    username:"hags",
    priceofbat:400
})

const myNewArray=[200,300,400]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))//we can also pass the array like this
console.log(returnSecondValue([200,300,400]))//array passed directly
