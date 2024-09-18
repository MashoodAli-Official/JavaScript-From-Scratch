// var - function-scoped, can be redeclared and reassigned
var apple = 5;
var apple = 10; // Redeclaration allowed
apple = 15; // Reassignment allowed
console.log(apple); // Output: 15

// let - block-scoped, cannot be redeclared but can be reassigned
let banana = 20;
// let banana = 25; // Error: Cannot redeclare block-scoped variable 'banana'
banana = 30; // Reassignment allowed
console.log(banana); // Output: 30

// const - block-scoped, cannot be redeclared or reassigned
const cherry = 40;
// const cherry = 45; // Error: Cannot redeclare block-scoped variable 'cherry'
// cherry = 50; // Error: Assignment to a constant variable
console.log(cherry); // Output: 40

// Block scope demonstration
{
    var grape = 60; // Accessible outside the block
    let kiwi = 70; // Only accessible within this block
    const lemon = 80; // Only accessible within this block
}
console.log(grape); // Output: 60
// console.log(kiwi); // Error: kiwi is not defined
// console.log(lemon); // Error: lemon is not defined

// Function scope demonstration
function fruitBasket() {
    var mango = 'Yellow mango';
    let orange = 'Juicy orange';
    const pineapple = 'Sweet pineapple';
    console.log(mango, orange, pineapple); // All accessible here
}
fruitBasket();
// console.log(mango); // Error: mango is not defined
// console.log(orange); // Error: orange is not defined
// console.log(pineapple); // Error: pineapple is not defined

// Demonstrating temporal dead zone for let and const
console.log(peach); // Output: undefined (due to hoisting)
// console.log(plum); // Error: Cannot access 'plum' before initialization
// console.log(fig); // Error: Cannot access 'fig' before initialization
var peach = 90;
let plum = 100;
const fig = 110;

