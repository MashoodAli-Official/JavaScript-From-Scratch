// Abstraction in Javascript
// How one class can inherit properties and methods from another, allowing code reuse and hierarchical relationships.

// Define a class called mobilePhone
class mobilePhone {
    // Constructor method to initialize the mobile phone
    mobileStart(){
        console.log("Mobile is starting");
    };
    // user method represents the user's interaction with the mobile phone
    // This method calls the mobileStart method and logs a message to the console
    user (){
        this.mobileStart(); // Call the mobileStart method to simulate the mobile phone starting
        console.log("User is using mobile");
    };
}
const mobile = new mobilePhone(); // Create a new instance of the mobilePhone class
mobile.user(); // Call the user method on the mobile instance to simulate user interaction