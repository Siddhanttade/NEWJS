//immediately invoked function expression(iife)
//iife is used to cope up with the problem of pollution caused by variables of global scope
//iife doesn't know where to stop the context of the invoked code so it is necessary to end the iife

(function room(){
    console.log(`DB CONNECTED`)
})(); //this is a named iife

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("sid")