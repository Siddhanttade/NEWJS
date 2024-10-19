// let myName="siddhant"
// let myChannel="sid"

// console.log("myName.trueLength"); //i want to get true length of str

let myHeroes=["sid","mom"]

let heroPower={
    sid:"play",
    mom:"care",

    getmomPower:function(){
        console.log(`Mompower is ${this.mom}`);      
    }
}

Object.prototype.siddhant=function(){
    console.log(`siddhant is present in all object`);
}

Array.prototype.heysiddhant=function(){
    console.log(`hello sid`);    
}

heroPower.siddhant()
myHeroes.siddhant()

myHeroes.heysiddhant()
// heroPower.heysiddhant()   //this wouldnt work because we have declared power for array and it would not pass on to object

//Inheritance

 //every object is an instance therefore they dont share info and dont have same property however all of them have same default properties which are present in every object


const user={
    username:"sid",
    email:"sid@google.com"
}

const Teacher={
    makeVideo:true
}

const Teachingsupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__:Teachingsupport      //this is used to borrow the properties of the above object
}

Teacher.__proto__=user //this gives teacher the property of user

//Modern syntax
Object.setPrototypeOf(Teachingsupport,Teacher)  //Teachingsupport given the properties of teacher

//solution to problem

let anotherUserName="chaiaurjs"

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is:${this.trim().length}`);
}

anotherUserName.trueLength()
"siddhant".trueLength()
"kunal".trueLength()



