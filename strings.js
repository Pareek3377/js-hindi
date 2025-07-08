const name="Priyanshu"
const repoCount = 13

//console.log(name + repoCount +"Value");  //wrong syntax nowadays

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//string interpolation: String interpolation is a feature in many programming languages that allows you to embed expressions directly within string literals. This makes it easier to create formatted strings by substituting variables or the results of expressions into placeholders within the string
//use backtick method only not +, one and backtick is The backtick (`) is a typographical mark primarily used in computing and is also known as backquote or grave accent
const gameName = new String('Priyansh-upp')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.charAt('8'));
console.log(gameName.indexOf('y'));

const newString= gameName.substring(0,5);
console.log(newString)

const anotherString=gameName.slice(-12,4);
console.log(anotherString);

const newString1 = "   priyanshu   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://priyanshu.com/pr%20pareek"

console.log(url.replace('%20','-'))
console.log(url.includes('pri'));

console.log(gameName.split('-'));

