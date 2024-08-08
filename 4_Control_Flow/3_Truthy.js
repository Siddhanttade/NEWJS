const userEmail="h@19"
const user=[]

if(userEmail){
    console.log("yu have credentials");
}
else{
    console.log("you dont have credentials"); 
}

//falsy val
//false,0,-0,BigInt 0n,undefined,NaN,"",null

//truthy val
//"false","0"," ",[],{},function(){}

//for checking that array is empty
if(user.length===0){
    console.log("empty array"); 
}

//for checking empty obj

const emptyObj={}

if(Object.keys(emptyObj).length===0) {          //here object.keys converts empty object to array and after that we use length propert
        console.log("object is empty");      
}  

//on console(browser)
//false="" =>true
//false=0  =>true
//0=""     =>true

//NULLISH COALESCING OPERATOR(??): mostly plays with null and undefined
//this operator is useful when we deal with database if databse returns null value we can check for it also we can pass functions after question marks
let val1;
val1=5??10
val2=null??10
val3=undefined??15
val4=null??10??20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//ternary operators

//condition?true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("price less than 80"):console.log("price greater than 80");





