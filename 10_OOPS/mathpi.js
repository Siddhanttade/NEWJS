const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")        //it tells us about the hidden property of object, math mdhe konya key chi property check karaychi ahe
//Object.getOwnPropertyDescriptor=> is a method in JavaScript that returns a property descriptor for a specific property of an object. A property descriptor is an object that describes the configuration of a property, including whether it's writable, enumerable, or configurable.

console.log(descriptor);


    //    { value: 3.141592653589793,       this is the answer we get for seeking the properties these are hard coded and we can also define our own properties like this
    //     writable: false,
    //     enumerable: false,
    //     configurable: false
    //   }

const chai={
    name:"gingerchai",
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai problem");        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai));  //this syntax gives undefined because by using this method we get property of certain key present in object proper syntax below

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//for defining certain properties
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false        //it stopped the overwriting of values
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {         //chai as an object whole cannot be iterated thus we are using object.entries which helps for iterating values in object
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
}
