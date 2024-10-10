"use strict";

let num1 = 10;
console.log(num1);

let num2 = new Number(20.00192848);
console.log(num2); //20.00192848
console.log(num2.toPrecision(3)); //20.0
console.log("To String: ",num2.toString()); //20.00192848

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log("Minimum Value: ",Number.MIN_VALUE); //5e-324