/*
    Destructuring: allows you to easily extract array elements or object properties and store them in variables.
    It is different than spread operator. Spread operator takes out all elements/properties and distributes them
    into a new array or object whereas destructuing allows you to extract single elements or properties and
    store them in variables.
*/

const arr = ["Hello", "Ahmed"];
[a,b] = arr;
console.log(a);
console.log(b);

const bus = {
    id: "GTR 214",
    make: "Daewoo",
    seats: 37
}

 const {id:id} = bus;
 console.log("id: ",id);
