'use strict';
//Global Scope
let x = 5;
console.log("Global Scope Variable, Outside scope",x); //5
{
    console.log("Global Scope Variable, Inside scope",x); //5
}

// Local Scope
function myFunction(){
    let y = 44;
    console.log("Local Scope Variable: ", y);
}
myFunction();
console.log(myFunction());

// Block Scop
{
    let z = 10;
    console.log(" Block Scope Variable: ",z); // 10
};
//x CAN NOT access outside the block {}
// console.log(z); //x is not defined
