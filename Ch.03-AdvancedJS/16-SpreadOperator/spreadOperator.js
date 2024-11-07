'use strict';
let heroes = ['iron man', 'captain america', 'hulk', 'thor'];
let heroes2 = ['spider man', 'black panther', 'wolverine', 'deadpool'];
let marvelHeroes = [...heroes, ...heroes2];
document.getElementById('demo').innerText = marvelHeroes;
console.log(marvelHeroes);