"use Strict";
//create an instance of Animal
function Animal (name){
    this.name = name; 
}

//create an instance of Animal
let cat = new Animal("cat");
console.log(cat instanceof Animal); //true

//function to create an instance of person
function person(name, job){
    this.name = name;
    this.job = job;
};
//create an instance of person
let personDetails = new person("Spider Man", "Super hero");
console.log(personDetails instanceof person); //true    