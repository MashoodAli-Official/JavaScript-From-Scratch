"use strict";

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class
class Cat extends Animal {
  speak() {
    console.log(`${this.name} Meows.`);
  }
}

const dog = new Cat('Lexi');
dog.speak();  // Lexi Meows.
