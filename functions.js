function sayMyName (){
    console.log("H");
    console.log("S");
    console.log("R");
    console.log("A");
    console.log("H");

}
//sayMyName()

/* function addTwoNumbers(number1,number2){
    console.log(number1+number2);
    
} */


function addTwoNumbers(number1,number2){
    //let result = number1 + number2
    //return result // after return statement in function nothing will execute 
    return number1 + number2
}
const result = addTwoNumbers(3,5)

//console.log("Result: ",result);

function loginUserMessage (username="Sam"){
    if(!username){
        console.log("Plz enter a usernsame");
        return 
    }
    return `${username} just logged in `
}
//console.log(loginUserMessage("Priyanshu"))
//console.log(loginUserMessage("Priyanshu"))//overwritten the above username


function calculateCartPrice(val1,val2,...num1){   //rest operator
        return num1
}
//console.log(calculateCartPrice(200,400,500,1000))

const user = {
    username:"Priyanshu",
    price:299
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"sam",
    price:500
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));

