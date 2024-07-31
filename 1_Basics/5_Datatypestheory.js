//primtive=>the datatypes which are call by value meaning whenever they are called original data reference is not given from memory rather a copy is given and the changes you make are saved in the copy

//String,bigint,number,boolean,null,undefined,symbol

// const score=33
// const bigNum=328568435435854359539n
// const num=45
// const isLoggedIn=true
// let outsideTemp=null

// let userName;

// const id=Symbol('123')
// const anotherId=Symbol('123') //Both are different
// console.log(id===anotherId)

//Reference(non Primitive)
//array,obect,function

// const heroes=["sid","sum","kun"]
// let obj={
//     name:"siddhant",
//     class:TY,
// }

//REMEMBER=>if we try to get the value of null by using typeof method then it shows object, similarly nonprimitive datatype also show object as its datatype. If we see typeof(function) it is function object

/*******************************************MEMORY ALLOCATION*********************************************/

//stack used for primitive datatype and heap used for non-primitive. When stack is declared we get a copy of variable and when we declare heap we get a reference of variable

let myName="siddhanttade"

let anotherName=myName
anotherName="kundan"

console.log(myName)
console.log(anotherName)

let user1={
    email:"prajwal@google.com",
    name:"prajwal"
}

let user2=user1

user2.email="kartik@gmail.com"

console.log(user1.email)
console.log(user2.email)
