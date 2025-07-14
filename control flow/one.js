//IF
const isUserLoggedIn = true
const Temp = 41
if(Temp===50){
    //console.log("less than 50");
}else{
//console.log("temperature is greater than 50")
}
//console.log("execute");

//<, >, <=, >=, ==, !=, ===

/* const score=200

if(score>100){
    let power = "fly"
    console.log(`user power:${power}`);
    
}
console.log(`user power: ${power}`); */


/* const balance = 1000

//if(balance>500) console.log("test");
if(balance<500){
    console.log("less than 500");
    
}
else if(balance<750){
    console.log("less than 750");
    
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1300");
    
} 

const userLoggedIn=true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}*/


const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("Marcch");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
   
    
    default:
        console.log("default case match");
        
        break;
}

// falsy values 
//false,0, -0, BigInt 0n, "", null , undefined, Nan

//Truthy Values
//"0", 'false',

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = null ?? 10
val1= undefined?? 15

console.log(val1);


//Ternary Operator 

//condition ? true: false

const iceTeaPrice = 10
iceTeaPrice>=80 ? console.log("less than 80"): console.log("more than 80");

