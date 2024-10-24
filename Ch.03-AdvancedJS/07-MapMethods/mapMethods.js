'use strict';

// New Map() method will create a new Map object
let superHeros = new Map(
    [
        ["Tony Stark", "Iron Man"],
        ['Steve Rogers', 'Captain America'],
        ['Dr. Bruce Banner', 'Hulk'],
        ['Thor', 'God Of Thunder'],
    ]
);
console.log(superHeros); //Map(4) {'Tony Stark' => 'Iron Man', 'Steve Rogers' => 'Captain America', 'Dr. Bruce Banner' => 'Hulk', 'Thor' => 'God Of Thunder'}

// get() method
console.log(superHeros.get('Tony Stark')); //Iron Man

//set() method,
let dcHeros = new Map();
dcHeros.set('Bruce Wayne', 'Batman');
console.log(dcHeros); //{'Bruce Wayne' => 'Batman'}
// change the values by set() method
dcHeros.set('Bruce Wayne', 'Dark Knight');
console.log(dcHeros); //{'Bruce Wayne' => 'Dark Knight'}

//delete() method
let planets = new Map([
    ['Mercury', 1],
    ['Venus', 2],
    ['Earth', 3],
    ['Mars', 4],
]);
console.log(planets); //Map(4) {'Mercury' => 1, 'Venus' => 2, 'Earth' => 3, 'Mars' => 4}
planets.delete('Mars');
console.log(planets); //Map(3) {'Mercury' => 1, 'Venus' => 2, 'Earth' => 3}

//clear() method
let bikes = new Map();
bikes.set('Honda', 'CBR600RR');
bikes.set('Yamaha', 'R15');
bikes.set('Suzuki', 'Gixxer');
console.log(bikes); //Map(3) {'Honda' => 'CBR600RR', 'Yamaha' => 'R15', 'Suzuki' => 'Gixxer'}
bikes.clear();
console.log(bikes);