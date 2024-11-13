// Stack example: Primitive variables (number, string, boolean, null, undefined)
// Creating a function
function calculateSum(a,b){
    // a and b are stored in the stack
    const result = a + b; // result also stored in the stack
    return result;
};
const num1 = 100; // num1 is stored in the stack
const num2 = 200; // num2 is stored in the stack
const sum = calculateSum(num1, num2); // sum is stored in the stack
console.log(sum); //300

//Heap example : not primitive variables (functions, object, array)
// creating a object which is stored in the heap
const hero = {
    name : "Iron Man",
    age : 45,
};
console.log(hero);