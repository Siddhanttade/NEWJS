class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username:${this.username}`);
    }

    static createId(){      //this prevents access of other object instantiated from this class(controls access)
        return`123`
    }
}

const sid=new User("sid")
// console.log(sid.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone= new Teacher("iphone","i@phone.co")
console.log(iphone.createId());
