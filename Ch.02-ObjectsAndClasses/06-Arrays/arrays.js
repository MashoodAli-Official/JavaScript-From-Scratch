"use Strict";

let arr1 = [1,2,3,4,10,6,7,8,9,5];
console.log("Array : ",arr1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Map method
console.log("Map",arr1.map(x => x+5));// [6, 7, 8, 9, 15, 11, 12, 13, 14, 20]

//Length method
console.log("Length Of Array: ",arr1.length); //10

//Sort method
let arr2 = [2,5,0,3,9,8,6,7];
console.log("Array in Ascending order: ", arr2.sort()); //[0, 2, 3, 5, 6, 7, 8, 9]

//Reverse method
console.log("Reverse Array: ", arr2.reverse()); // [9, 8, 7, 6, 5, 3, 2, 0]

//Join method
console.log("Join in Array: ", arr2.join()); // 0,2,3,5,6,7,8,9

//Concat method
console.log("Concat in Array: ", arr1.concat(arr2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 5, 0, 3, 9, 8, 6, 7]

//Pop method
console.log("Pop method in Array: ", arr2.pop(3)); //3

//push method
console.log("Push method in array: ", arr1.push(11));
console.log("New array after push 11: ", arr1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Shift method
console.log("Shift method in array: ", arr1.shift());
console.log("New array after shift: ", arr1); //[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Unshift method
console.log("Unshift method in array: ", arr1.unshift(1,100));
console.log("New array after unshifting new two elements: ", arr1); //[1, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Slice method
console.log("Slice method in array: ", arr1.slice(11, 13)); //[11, 100]
console.log("New array after slicing: ", arr1); //[1, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Splice method
console.log("Splice method in array: ", arr1.splice(15, 13)); //[11, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("New array after splicing: ", arr1); //[1, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Flat method
console.log("Flat:", arr2.flat(1)); //[2, 5, 0, 3, 9, 8, 6, 7]

//Filter Method
let age = [2,3,5,7,9,13,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
function checkAdult(age){
    return age >= 18;
}
let result = age.filter(checkAdult);
console.log("Filter method: ", result);