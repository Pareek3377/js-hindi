function multiplyBy5(num){
    this.num=num
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power = 2);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username= username
    this.score=score
}

createUser.prototype.increment= function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`SCore is ${this.score}`);
    
}

const chai= new createUser("chai",25)
const tea=createUser("tea",250)

chai.printMe()

/*

here's what happens when the new keyword is used behid the scenes:

A new object is created: the new keyword initiates the creation of a new js object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function . this means tthat it has access to properties and methods defined on constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object . iF no explicit return value is specified from the constructor . Javascript assumes this, the newly created object , to be the intended return value.

The new object is returned: After the constructor function has been called , if it doen't return a non- primitive value(object, array, function, etc), The newly created object is returned.
*/
