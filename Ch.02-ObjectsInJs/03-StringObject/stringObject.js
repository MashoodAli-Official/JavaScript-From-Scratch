"Use Strict";

let str1 = "Hello Universe";
let str2 = new String(" Hi Universe");

console.log(str1); // Hello Universe
console.log(str2); //  Hi Universe
console.log(str2.length); // 11
console.log(str2.toUpperCase()); // HI UNIVERSE
console.log(str2.toLowerCase()); // hi universe
console.log(str2.replace("Hi Universe", "Hello jungle world")); // Hello jungle world
console.log(str2.includes("Hi")); // true
console.log(str2.trim());//Hi Universe
console.log(str2.split(" "));   // ['', 'Hi', 'Universe' ]
console.log(str2.slice(2,8)); // i Univ
console.log(str2.)