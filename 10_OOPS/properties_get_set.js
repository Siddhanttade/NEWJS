//this is same code for getter and setter but syntax is complex
function User(email,password){
    this._email=email
    this._password=password
    
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })     //this is used to provide context
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value
        }
    })
}

const sid=new User("sid@gmail","abc")
console.log(sid.email);
