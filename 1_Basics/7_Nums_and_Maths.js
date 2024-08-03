const score=400
console.log(score);

const matchScore=new Number(100)
console.log(matchScore);

const number=123
console.log(number.toFixed(2));

const anotherNum=123.896
console.log(anotherNum.toPrecision(4));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-In'));

/***************************Math Library *******************************/
console.log(Math)

console.log(Math.round(4.5))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.2));
console.log(Math.random())

//defining no between a range
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);