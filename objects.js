//Singleton

// Object literals
//Object.create

//Object Literals 
/*
 const mySym = Symbol("Key1")


const JsUser = {
    name:"Priyanshu",
    "full name":"Priyanshu Pareek",
    [mySym]:"mykey1", //must use [] for symbols
    age: 21,
    location:"Jaipur",
    email: "ppgoogle.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="priyanshu@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="priyanshu@cmicrot.com"
console.log(JsUser); 


JsUser.greeting=function(){
    console.log("Hello JSUser ");
}
JsUser.greeting2=function(){
    console.log(`Hello JSUser, ${this.name}` );
}

console.log(JsUser.greeting());

console.log(JsUser.greeting2());
*/


/* const tinderUser= {}

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Priyanshu",
            lastname:"Pareek"
        }

    }

}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a",4:"b"};

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email:"p@gmail.com"

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/

const course={
    coursename:"js in hindi",
    price:"999",
    courseStudent:"Priyanshu"
}
 
//course.courseStudent

const {courseStudent:Student}=course

console.log(Student);

/* {
    "name":"Priyanshu",
    "coursename":"jsinhindi",
    "price": "free"
} */

    [
        {},
        {},
        {}
    ]
