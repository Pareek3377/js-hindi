const user = {
    username:"Priyanshu",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`); //this refers to current context
        console.log(this);

    }

}
//user.welcomeMessage()  //methods always runs with "()".
//user.username="sam"
//user.welcomeMessage()

//console.log(this);

/* function cofee(){
    let username="priyanshu"
    console.log(this.username);
    
}

cofee(); */

const chai=() =>{
    let username="priyanshu"
    console.log(this); 
}
//chai()

//const add2=(num1,num2) =>  num1+num2
const add2=(num1,num2) =>  (num1+num2)

console.log(add2(7,8))

//const myArray=[2,4,6,8];

//myArray.forEach()