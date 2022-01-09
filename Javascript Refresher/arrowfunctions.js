/*
    Regular Javascript Function
*/
function printMyName(name){
    console.log(name);
}

printMyName("Ahmed Bashir");

/*
    Arrow function 
*/
const printName = (name)=>{
    console.log(name);
}
printName("Ahmed Bashir - Arrow Fn");

/*
    In case of single argument, you can make the arrow function syntax more concise
*/
const printName2 = name => {
    console.log(name);
}

const multiply = number => {
    return number * 2; 
}

/*
    In case of single line return, you can also omit the curly braces and write the function in one line by omitting the return keyword 
*/
const add = (a,b) =>  a + b;
const max = (a,b) => a > b? a : b;

console.log(add(2,3));
console.log(max(2,3));
