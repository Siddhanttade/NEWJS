//for of generally used for array

//used mostly for  ["","",""] [{},{},{}] normal array and array of objects
let myArray=[1,2,3,4,5]

for (const num of myArray) {
    console.log(num);  
}

let greetings="hello world"

for (const greet of greetings) {
    console.log(greet);
}

//Maps=>Objects that remember the order of keys and don't take repeatative keys
const map=new Map() 

map.set('IN',"India")
map.set('US',"United States")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);
//maps are not iterable using forIn loop

//for of loop directly picks the value
for (const key of map) {                    //this loop shows the array of key value pair
    console.log(key);     
}

for (const [key,value] of map) {            //this loop shows destructured key value pair
    console.log(`${key} :- ${value}`); 
}

const myObj={
    "game1":"NFS",
    "game2":"Gta"
}

// for (const games of myObj) {     this object is not iterable using forof loop    
//     console.log(games);   
// }

const myObject={
    "js":"javascript",
    "rb":"ruby",
    "cpp":"C++",
    "swift":"apple",
}

//This forin loop doesnt pickup value from array directly because keys of array are number starting from 0 thus objects were created to contain random keys.Generally used for objects
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);    
}

const programming=["js","ruby","py","c++","java"]

for (const key in programming) {
    console.log(`Value of key in terms of index is ${key}`);
    console.log(`Value of keys is ${programming[key]}`);       
}