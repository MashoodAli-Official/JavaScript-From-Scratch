//Simple function
function firstFunction (){
    console.log("Hello");
    console.log("Universe");
} 
firstFunction();

// ************************************************************

// Simple function with parameters
function sumFunction (num1, numb2){
    console.log(num1); // 2
    console.log(numb2); // 3
    console.log(num1 + numb2); // 5
};
sumFunction(2, 3);

// ************************************************************

// Simple function with return
function sumFunctions (num1, numb2){
    console.log(num1); // 10
    console.log(numb2); // 20
    console.log(num1 + numb2); // 3
    return num1 + numb2; // 60
};
sumFunctions(10,50);

// These are 3 main function examples: function without parameters,
// function with parameters, and function with a return value.
// Functions without an explicit return are simple and often used for performing actions.
// In some languages, these are called "void functions". In JavaScript, they implicitly return undefined.
// Functions with a return value pass data back to the caller, making this value reusable across the program.
