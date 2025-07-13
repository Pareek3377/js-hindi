// Immediately Invoked Function Expression(IIFE);

(function chai(){
    //named IIFE
    //console.log(`DB CONNECTED`);
    
})();


( (name) => {
    //console.log(`DB CONNECTED TWO $ {name}`);
})('Priyanshu')

// Javascript Execution Context
//1. Global Execution Context-> THis
// 2. Function Execution Context 
//Eval Execution Context 

let val1=10
let val2=5
function addNum(num1,num2){
    let total = num1+ num2
    return total 
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)


/*
1.Global Execution -> This
2. Memory Phase :
 val1->undefined
 val2->undefined
 addNUm->definition
 result1->undefined
 result2->undefined

 3.Execution Phase
 val1<-10
 val2<-5
 addNum->[new variable env + execution thread]
 Now memory phase for new env
 1.memory phase:         2.Execution Context
   val1->undefined         num1->10
   val2->undefined         num2->5
   total->undefined         total->15
                            total returns in GEC
When the work of new env is done it deletes
*/
