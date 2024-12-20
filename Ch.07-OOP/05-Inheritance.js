// Inheritance is JavaScript 
// How one class can inherit properties and methods from another, allowing code reuse and hierarchical relationships.

// Parent class representing a generic superhero
class superHero {
    // Constructor initializes superhero with a name
    constructor (name){
        this.name = name;
    };

    // Base method for hero's iconic dialogue
    iconicDialogue(){
        console.log(`I am ${this.name}`)
    };
};

// Child class inheriting from superHero class
class hero extends superHero{
    // Override parent's iconicDialogue method with Iron Man specific dialogue
    iconicDialogue(){
        console.log(`I am ${this.name} and I am Iron Man`)
    }
};

const myHero = new hero ("Tony Start");// Create new instance of hero class
myHero.iconicDialogue(); // Call the overridden iconicDialogue method