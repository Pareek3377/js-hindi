 // Primitive 

// 7 types or categories: String , Number, Boolean, Null, Undefined, Symbol,BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

 console.log(id==anotherId); 

 const bigNumber = 3472598739 

// Reference (Non- Primitive)

//Array, Objects, Functions, 

const heroes= ["shaktimaan","Hero","Doga"];
let myObj={
    name: "priyanshu",
    age: 22,

}
const myFunction=function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);
console.log(typeof heroes);
 
 https://262.ecma-international.org/15.0/index.html?_gl=1*1lbzmrg*_ga*NzUzNzAwOTY5LjE3NTE4NzAxMjA.*_ga_TDCK4DWEPP*czE3NTE4NzAxMjAkbzEkZzAkdDE3NTE4NzAxMjAkajYwJGwwJGgw */

//*******************MEMORIES:******************/

// Stack(Primitive), Heap(Non-Primitive)*/

let myYoutubename = "PriyanshuPareekvlogs"

let anothername = myYoutubename
anothername="seribal assasin"

console.log(myYoutubename);
console.log(anothername);

let user1={
    email: "user@google.com",
    upi : "user@ybl"
}
let user2= user1

user2.email= "priyanshu@google.com"

console.log(user1.email);
console.log(user2.email);

