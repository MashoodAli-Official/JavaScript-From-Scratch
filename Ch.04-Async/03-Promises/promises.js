'use strict';

// Creating a new Promise object
// resolve and reject are parameters
let newPromise = new Promise((resolve, reject) => {
    // Simulating a condition. Change this value to 'false' to test the reject scenario.
    let success = true; 

    // If the condition is met, we call resolve and pass the success message
    if (success) {
        resolve('Iron Man is Tony Stark'); // This will pass the success message to .then()
    } else {
        // If the condition is not met, we call reject and pass the failure message
        reject('Iron Man is not Roddy'); // This will pass the error message to .catch()
    }
});

// Handling the promise
newPromise
    .then((message) => {
        // This code runs if the promise is resolved successfully
        console.log(message); // Logs: "Iron Man is Tony Stark" if resolved
    })
    .catch((message) => {
        // This code runs if the promise is rejected
        console.log(message); // Logs: "Iron Man is not Roddy" if rejected
    });