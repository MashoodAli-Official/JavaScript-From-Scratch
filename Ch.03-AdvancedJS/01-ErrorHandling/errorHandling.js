"use strict";

var num1 = 9;
var num2 = 0;

console.log(num1/num2); //Infinity

///Exception/Error handling using try 
try {
    if (num2 === 0){
        throw("There was an error dividing by zero");
    }
    else{
        console.log(num1/num2);
    }
}
catch (error){
    console.log("Error: " + error);
};

//If you change to num2 = 3 then console log will be different