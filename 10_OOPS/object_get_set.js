//In this type os syntax we can use factory function
const User={
    _email:'sid@gmail',     // "_" is considered as pvt
    _password:'abc',

    //get and set take properties from the memory and modify them accordingly becoz they don't treat _email as method but consider it as property
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email=value
    }
}

const tea=Object.create(User)   //creating an object based on the refernce of user
console.log(tea.email);
