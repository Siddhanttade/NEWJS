// All the js used nowadays is after ES6

class User{
    constructor(username,email,password){       // Constructor is immediately called after an object is initialized in class(when new keyword is used) 

        this.username=username
        this.email=email
        this.password=password      
    } 
    encryptPassword(){
        return(`${this.password} abc`)
    }
    changeUserName(){
        return(`${this.username.toUpperCase()} `)
    }
}

const sid=new User("sid","sid@gmail.com","123")
console.log(sid.encryptPassword());
console.log(sid.changeUserName());

//behind the scene
function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password 
}

User.prototype.encryptPassword=function(){
    return(`${this.password} abc`)
}

User.prototype.changeUserName=function(){
    return(`${this.username.toUpperCase()} `)
}

const ro=new User("ro","sid@gmail.com","123")
console.log(ro.encryptPassword());
console.log(ro.changeUserName());



