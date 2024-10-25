//getter and setter are by default present in the class but till now we haven't specified there properties we can set them on any of the properties of class. All the properties that we make in class,automatically getter and setter gets formed as a method of that property.Getter and setter occur in pair
//getter and setter must've same name as that of the properties
class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    // get password(){
    //     return this.password.toUpperCase()
    // }
    // set password(value){
    //     this.password=value.toUppercase()       //maximum call stack size exceede is the error we get becoz a kind of race is present b/w constructor and setter so make new property
    // }
    // get password(){                             //here constructor sets the value email, password is overwritten by getter and setter  
    //     return this._password.toUpperCase()
    // }
    // set password(value){
    //     this._password=value.toUpperCase()       
    // }
    get email(){                            //in setters we don't return the value
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value 
    }

    get password(){                            
        return `${this._password}siddya`    //in set we store diff value and at the time of showing show different val
    }
    set password(value){
        this._password=value.toUpperCase()       
    }
}

const sid=new User("sid@gmail","abc")
console.log(sid.password);
console.log(sid.email);

