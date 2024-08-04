let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof(myDate));

let myCreateDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("2023-01-14")
console.log(myCreateDate.toLocaleString())
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));// Used to get time in seconds

let newDate=new Date();
console.log(newDate.getDate());// here Indexing is used and 0 means january or the first month
console.log(newDate.getMonth());

//Important Method =>imp because we can define object in this method
console.log(newDate.toLocaleDateString('default',{
    weekday:"long"
}))






