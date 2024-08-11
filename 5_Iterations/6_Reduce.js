const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currVal){
    console.log(`acc${acc} and currVal ${currVal}`);
    return acc+currVal
},0)

const myTotal1=myNums.reduce((acc,currVal)=>(acc+currVal),0)

console.log(myTotal);
console.log(myTotal1);

const shoppingCart=[
    {
        itemName:"jscourse",
        price:299
    },
    {
        itemName:"pycourse",
        price:1299
    },
    {
        itemName:"webcourse",
        price:2299
    },
    {
        itemName:"devcourse",
        price:3299
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);

