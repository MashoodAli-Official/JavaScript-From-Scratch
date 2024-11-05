'use strict';

const marvelHeros = new Set(); //creating the new constructor by Set() method
marvelHeros.add('SpiderMan');
marvelHeros.add('IronMan');
marvelHeros.add('Thor');
marvelHeros.add('Hulk');
console.log(marvelHeros);

console.log(marvelHeros.has('IronMan'));
console.log(marvelHeros.has('AntMan'));
console.log(marvelHeros.size);
console.log(marvelHeros.delete('Thor'));
console.log(marvelHeros.size);