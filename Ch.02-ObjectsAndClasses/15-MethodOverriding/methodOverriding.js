class housePet {
    speak() {
      console.log("The house pet makes a sound.");
    }
  }
  
  class Cat extends housePet {
    speak() {
      // Call the parent class's method
      super.speak();
      console.log("The Cat Meows.");
    }
  }
  
  let myCat = new Cat();
  myCat.speak();
  // Output:
  // The house pet makes a sound.
  // The Cat barks.