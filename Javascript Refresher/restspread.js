/*
    Syntax: ...
    Spread: used to spread the array elements or object properties
    Rest: used to merge a list of function arguments into an array
*/

//Spread operator usage on arrays
let oldArray = [2,4,6,8];
let newArray = [...oldArray, 1,3,5,7,9];
console.log("oldArray: ", oldArray);
console.log("newArray: ", newArray);

//Spread operator usage on objects
const oldObject = {
    name:"Ahmed"
}
const newObject = {...oldObject, age:29};
console.log("oldObject: ", oldObject);
console.log("newObject: ", newObject);


//Rest operator
function sortArgs(...args){
    return args.sort();
}

console.log(sortArgs(9,4,1,2,8));

const filter = (...args) => {
    return args.filter(el => el === 2);
}

console.log(filter(1,1,2,3,4,2,3));