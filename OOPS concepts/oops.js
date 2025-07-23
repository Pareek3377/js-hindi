const user={
  username : "Priyanshu",
  loginCount: 8,
  signedIn: true,

  getUserDetails:function(){
    //console.log("Got user details from DB");
    //console.log(`Username: ${this.username}`);
    //console.log(this);
    
  }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

 const promiseOne = new Promise()
const date = new Date() 
// constructor function

function User(username,loginCount, isLoggedIn ){
  this.username= username;
  this.loginCount=  loginCount;
  this.isLoggedIn= isLoggedIn

  this.greeting=function(){
    console.log(`Welcome $ {this.username}`);
    
  }

  return this
}
const userOne= new User("Priyanshu",12,true)
const userTwo= new User("Chai aur code",11,false)
console.log(userOne.constructor);
console.log(userTwo);

//whenever new keyword is used new instance or object is created
//constructor function is called due to new keywaor
//this keyword inject arguments wrote by user in it
// then it returns while calling the function
