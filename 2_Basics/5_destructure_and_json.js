const course={
    email:"sid19",
    course:"abhyaas",
    teacher:"hitesh",
}

console.log(course.teacher);//instead of this we can write in the manner given below
//destructuring of object this is used in react because it has something called props and instead of writing props.name,props.mail we use destructuring
const {teacher:instructor}=course
console.log(instructor);

// { this is also one of the json format json objects sometimes contain array with diff objects 
//[{},
// {},
// {}
// ]
//     "name":"sid",
//     "game":"cric",
//     "place":"akot"
// }