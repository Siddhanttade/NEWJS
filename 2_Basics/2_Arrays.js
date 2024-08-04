const cricket=["rohit","kohli","ms"]

const newCricket=["gill","iyer","shaw"]

// cricket.push(newCricket);
// console.log(cricket)

// const cricketer=cricket.concat(newCricket)
// console.log(cricketer)

const talent=[...cricket,...newCricket] //Spread Method take a glass bottle and drop it the element will spread likewise for array element in spread method
console.log(talent)

const arr1=[1,2,3,[4,5,6],7,[6,5,[2,3,1]]];
console.log(arr1.flat(Infinity))

console.log(Array.isArray("Hitesh"))

console.log(Array.from("Siddhant"));
console.log(Array.from({name:"siddhant"}))  //Unique Case and returns empty array because we haven't specified that whether we want an array of keys or values

let s1=110
let s2=129
let s3=132

console.log(Array.of(s1,s2,s3))