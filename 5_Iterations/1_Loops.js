//
for (let i = 0; i < 10; i++) {
    const element =i;
    if(element===5){
        console.log("5 is best number");
    }
    console.log(element);   
}

for (let i = 0; i <10; i++) {
    const element = i;
    console.log(`outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        const element = j;
        //console.log(`inner loop value ${j} and outer loop ${i}`);   
        console.log(`${i}*${j}=${i*j}`);
    }   
}

let myArray=["chatrapati","shivaji","raje"]

for (let i = 0; i < myArray.length; i++) {
    const element =myArray[i];
    console.log(element);  
}

//Break and Continue keywords
for (let index = 1; index <= 10; index++) {
    if (index===5) {
        console.log(`detected 5`);
        break;                                  //break stops the loop at given point
    }   
    console.log(`value of i is${index}`)
}

for (let index = 1; index <= 10; index++) {
    if (index===5) {
        console.log(`detected 5`);
        continue;                               //continue skips the given point an continues in the loop 
    }   
    console.log(`value of i is${index}`)
}

//While and do while

let index=0
while(index<=10){
    console.log(`value of index is ${index}`);
    index=index+2    
}

let myArray1=["jay","shambhu","Rai"]

let arr=0
while (arr<myArray1.length) {
    console.log(`my heroes are ${myArray1[arr]}`);
    arr++;        
}

let score=1

do {
    console.log(`value is ${score}`);
    score++
} while (score<=10);            //speciality of do while loop is that it does the task atleast once and then moves to condition

let scoreA=11

do {
    console.log(`value is ${scoreA}`);
    scoreA++
} while (scoreA<=10);      