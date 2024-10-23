'use strict';
// creating a new simple map 
let newMap = new Map();

// Adding key values to the new map
newMap.set('name', 'Iron Man');
newMap.set('Occupation', 'Super Hero');
newMap.set('Age', '50');

//Accessing the values in the new Map
console.log(newMap.get('name')); //Iron Man
console.log(newMap.get('Occupation')); //Super Hero
console.log(newMap.get('Age')); //50

//Checking if the value exist in the Map
console.log(newMap.has('name')); //true
console.log(newMap.has('wifeName')); //false
console.log(newMap.has('Age')); //50

//Checking the size of the map
console.log(newMap.size); // 3

//removing the key value pair from the map
newMap.delete('Age');
console.log(newMap.size); // 2

//Clearing the all key value pairs from the map
newMap.clear();
console.log(newMap.size); // 0
