'use strict';

// A function that returns a Promise, simulating a delayed message display
function greetings() {
    console.log('Message will be displayed after 2 seconds');
    
    // Returning a Promise that resolves after 2 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello Universe from Async Await');
        }, 2000);
    });
}

// An async function that waits for the greetings() Promise to resolve
async function greetingMessage() {
    // Using await to pause execution until greetings() resolves
    const msg = await greetings();
    
    // Logging the resolved message once it's available
    console.log(msg);
}

// Calling the async function to display the greeting message
greetingMessage();


async function example() {
    console.log('Starting...');
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hello, World!');
      }, 2000);
    });
    console.log(result);
    console.log('Finished!');
  }
  
  example();