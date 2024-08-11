const coding=["java","cpp","python","ruby"];

//some loops are directly added in arrays as properties like the for each loop

//here we are using callback function so we dont need to name the function
coding.forEach((value)=>{
    console.log(value);
})

coding.forEach(function (value){
    console.log(value); 
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //don't execute the function here just take the reference of the function

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const codeOp=[
    {
    languageName:"javascript",
    landuageFileName:"js"
    },
    {
    languageName:"ruby",
    languageFileName:"rb"
    },
    {
    languageName:"C++",
    languageFileName:"cpp"
    },
    {
    languageName:"python",
    languageFileName:"py"
    }
]

codeOp.forEach((item)=>{
    console.log(item.languageName);
})

//foreach loop doesn't return any value from array for that you have to use different methods
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

