//let c=300   //global scope
let a = 300
if(true){         //block scope
   let a = 10
   const b = 20

   console.log("INNER : ",a);
   

}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Priyanshu "

    function two(){
        const website = "Youtube"
        console.log(username);

    }
    //console.log(website);
    two()
}
//one()
if(true){
    const username = "Priyanshu"
    if(username == "Priyanshu"){
        const website = " youtube"
       console.log(username + website);
       
    }
    //console.log(website);
    
}
//console.log(username);

//***********INTERESTING*************/
console.log(addOne(5));

function addOne(num){
    return num +1

}
addOne(5)

const addTwo = function(num){
    return num + 2;
}
addTwo(5)
