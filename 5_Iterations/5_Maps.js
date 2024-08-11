const myNumbers=[1,2,3,4,5,6,7,8,9,10];

//using Maps
const newNum=myNumbers.map((num)=>{return num+10})

console.log(newNum);

const newArr=[]

//Using foreach

myNumbers.forEach((item)=>{
    return newArr.push(item+10);
})

console.log(newArr);

//Chaining=>Applying multiple methods simultaneously like maps and filter 

const newNum1=myNumbers
              .map((num)=>num*10)  //here what happens is that an array is created initally with using this conditon
              .map((num)=>num+1)  //this condition gets applied on the above created array
              .filter((num)=>num>40)

console.log(newNum1);


