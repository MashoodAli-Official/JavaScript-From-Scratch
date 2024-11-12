// Polymorphism in JavaScript
// Allowing different classes to provide their own implementations of the same method, creating flexibility.

// Parent class
class superHero {
  superPower() {
    return "Extraordinary strength!";
  }
}

// Child classes with their own implementations
class ironMan extends superHero {
  superPower() {
    return "Rich and intelligent superhero";
  }
}

class captainAmerica extends superHero {
  superPower() {
    return "Superhuman strength and agility";
  }
}

class Hulk extends superHero {
  superPower() {
    return "Super strong and scientific mind.";
  }
}

// Example usage of polymorphism
const ironman = new ironMan();
const captainamerica = new captainAmerica();
const hulk = new Hulk();

// Same method call, different behaviors
console.log(ironman.superPower());  // Outputs: Rich and intelligent superhero
console.log(captainamerica.superPower());  // Outputs: Superhuman strength and agility
console.log(hulk.superPower()); // Outputs: Super strong and scientific mind.