//const coding=["js","ruby","java","python"];

//const values= coding.forEach((item) => {
        //console.log(item)
        //return item
//})
//console.log(values);

/* const myNums=[1,2,5,6,7,8]

//const newNums=myNums.filter( (num) => num > 5)
//console.log(newNums);

const newNums = []

myNums.forEach( (num) =>{
        if(num>4){
                newNums.push(num)
        }
})
console.log(newNums)
 */
/* const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.map((num) => num+10)
const newNums=myNums
                .map((num)=>num*10)
                .map((num)=> num+1)
                .filter((num)=>num>=40)
console.log(newNums);
 */

const myNums=[1,2,3]

//const myTotal= myNums.reduce(function(acc,currval){
      //  console.log(`acc: ${acc}and currval : ${currval}`);
      //  return acc+currval
//}, 0)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)

const shoppingCart=[
        {
                itemName:"js course",
                price:999
        },
        {
                itemName:"py course",
                price:990
        },
        {
                itemName:"java course",
                price:800
        },
        {
                itemName:"dsa course",
                price:12009
        },
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+ item.price,0)
console.log(priceToPay);
