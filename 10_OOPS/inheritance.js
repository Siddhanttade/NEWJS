class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
       }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)   //here super keyword redirects to extend and then it goes to above class and then it takes property from User
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);     
    }
}
 
const sid=new Teacher("sid","sid@gmail.com","123")
sid.addCourse()

const hags=new User("haggu")
hags.logMe()

console.log(sid instanceof Teacher);
