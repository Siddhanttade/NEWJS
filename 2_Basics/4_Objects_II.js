//const tinderUser= new object() this is a singleton object

const tinderUser={}//non singleton means without constructor

tinderUser.email="kunal.17"
tinderUser.name="hags"
tinderUser.age="18"

console.log(tinderUser);

const customer={
    fullname:{
        username:{
            firstname:"kunal",
            lastname:"hage"
        }
    }
}

console.log(customer.fullname.username.firstname)

//ways to combine objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4=Object.assign({},obj1,obj2,obj3);//1st method
const obj5={...obj1,...obj2,...obj3}//2nd method using spread operator
console.log(obj4)
console.log(obj5);

console.log(Object.keys(tinderUser)) //these methods are important because they give us an array of values which we can later use for loops
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//these makes an array which contains seperate array for each key value pair
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//gives whether the property is present in the object or not
