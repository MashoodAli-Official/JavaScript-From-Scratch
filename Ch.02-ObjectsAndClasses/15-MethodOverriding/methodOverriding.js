class Animal {
    speak() {
      console.log("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      // Call the parent class's method
      super.speak();
      console.log("The dog barks.");
    }
  }
  
  let myDog = new Dog();
  myDog.speak();
  // Output:
  // The animal makes a sound.
  // The dog barks.
  