//Arrays

const myArr= [0,1,2,3,4,5]
const myHeroes=["thor","ironman","captain america"];

console.log(myArr[0]);
console.log(myHeroes);

//Array methods

myArr.push(6)
myArr.push(8)
console.log(myArr);
myArr.pop();

console.log(myArr);
myArr.unshift(9) 
 myArr.shift()
console.log(myArr);
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(4));
console.log(myArr.includes(9)); 
const newArr = myArr.join()

console.log(myArr);
console.log( newArr); 
console.log("A", myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.slice(1,3)
console.log(myn2);
 

const marvel_Heroes=["thor","ironman","captain america"];
const dc_Heroes=["superman","Batman","Flash"];

marvel_Heroes.push(dc_Heroes)

console.log(marvel_Heroes);
console.log(marvel_Heroes[3][1]);
const allHeroes= marvel_Heroes.concat(dc_Heroes)
console.log(allHeroes);

const all_new_heroes=[...marvel_Heroes,...dc_Heroes];//spread operator

console.log(all_new_heroes);

 const another_array=[1,2,3,[4,5,6],7,[8,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array); 

console.log(Array.isArray("Priyanshu"));
console.log(Array.from("Priyanshu"));
console.log(Array.from({name: "Priyanshu"})); //Interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


