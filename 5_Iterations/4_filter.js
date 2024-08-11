//filter operation returns value instead of using forEach
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>num>4)

console.log(newNums);

const newNums1=myNums.filter((num)=>{
    return num>4;       //here while writing arrow function if we write curly brackets then don't forget to write return because we are defining scope 
})

console.log(newNums1);

//if we want to use for each loop then

const numbers=[]

myNums.forEach((nums)=>{
    if(nums>4){
        numbers.push(nums)
    }
})

console.log(numbers);


//uses of filter method
const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981,
    
    edition: 2004 },
    
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    
    edition: 2008},
    
    { title: 'Book Three', genre: 'History', publish: 1999,
    
    edition: 2007},
    
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    
    edition: 2010 },
    
    { title: 'Book Five', genre: 'Science', publish: 2009,
    
    edition: 2014 },
    
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    
    edition: 2010 },
    
    { title: 'Book Seven', genre: 'History', publish: 1996,
    edition:2011},

    { title: 'Book Eight', genre: 'Science', publish: 1986,
    edition:2005},
    
    { title: 'Book Nine', genre: 'Maths', publish: 1976,
    edition:2008}
]; 

//here we are doing overwriting because we are assigning different value to userBooks everytime

let userBooks=books.filter((bk)=>bk.genre==="History")
userBooks=books.filter((bk)=>bk.publish>=2008)
userBooks=books.filter((bk)=>{
    return bk.edition>=2008 && bk.genre==="History"
})

console.log(userBooks);
