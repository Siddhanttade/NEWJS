function multipleBy5(num){
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);//here we get an empty parenthesis it is [this] method for the context that are set by default
//In js we can use anything as object

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;   //this means jis
}

createUser.prototype.printMe=function(){
    console.log(`the price is ${this.score}`)
}

const chai=new createUser("chai",25) //here we transfer values from function thus we need to use the new keyword
const tea=new createUser("tea",250)

chai.printMe() //here the properties get injected

//Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

//  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
 
//  The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from constructor,JS assumesthis,the newly created object, to be intended the real value

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned


