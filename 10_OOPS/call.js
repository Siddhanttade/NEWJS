function setUsername(username){
    //complex DB calls
    this.username=username
    console.log('called');
}

function createUser(username,email,password){
    // setUsername(username)       //here this call wouldnt happen beacuse we have only given reference not call
    setUsername.call(this,username)      //this method is used to hold the reference all the variable declared,execution etc would remain in above syntax if execution context ends then all these stop i am giving my own this which passes current execution context to another function
    this.email=email
    this.password=password
}

const sid=new createUser('sid','sid@fb.com','123')
console.log(sid);
