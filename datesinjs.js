//Dates

/* let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); */

/* let myCreatedDate = new Date(2025 , 0, 23); */
/* let myCreatedDate = new Date(2025 , 0, 23, 5,6); */
// let myCreatedDate = new Date("2025-01-15"); 
//let myCreatedDate = new Date("01-12-2025"); 
//console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now();

/* console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); */
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//console.log(`${newDate.getDay()}and the time`);

newDate.toLocaleString('default',{
    weekday: "short",
})


