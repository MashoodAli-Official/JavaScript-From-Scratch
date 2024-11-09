// Classes and Objects in Object-Oriented Programming (OOP) using JavaScript

//Creating a class heroes which contains heroName and heroAge
// Creating a class named 'heroes' to store hero information
// This class demonstrates basic OOP concepts like constructor and methods
class heroes {
    // Constructor method to initialize object properties
    constructor(heroName, heroAge) {
        this.heroAge = heroAge;     // @param {string} heroName - Name of the hero
        this.heroName = heroName;    // @param {number} heroAge - Age of the hero
    };
    // Method to display hero details
    gerHeroDetails(){
        console.log(`Hero name is ${this.heroName} and age is ${this.heroAge}`);     // Uses template literals to format the output string
    };
};

// Creating an instance of the heroes class
const myHero = new heroes("Iron Man",40); // Instantiating a new hero object with name "Iron Man" and age 40

// Calling the gerHeroDetails method on the hero instance
myHero.gerHeroDetails();// This will print the hero's information to the console