//named functions- functions with name and name appears after function.
function greatName(){
    //code
}
greatName();

function sayHi(name){
console.log("Hello" + name)
}
sayHi("JOHN");

function addNums(num1,num2){
    console.log(num1 + num2)
    
}
addNums(100,100);
//anonymus functions a function without a name
const duMath=function(number1,number2){
    console.log(number1 * number2)

}
duMath(5,5);

const greeting=function (name){
    console.log(`Hey ${name}`)
}
greeting("Nimz");

const myName= function(name){
    console.log("bonjour"+"!"+name)
}
myName("Claire")

//arrow functions do not require many lines of code and are commonly knows are arrow function du eto the use of equals and greater than sign used making it appear as an arrow
const greet=(name)=>console.log(`hey ${name}`)

greet("WAIRIRI");


const printBookArrow=(book)=>console.log(book)

printBookArrow("Love Lasts");

const sumNums=(digit1 ,digit2)=>console.log(digit1 +digit2)
sumNums(3,2);