'use strict';

// Function to fetch the data from the server
function fetchData(){
    // Return a promise
    return new Promise((resolve, reject) => {
        // Simulate a delay of 2 seconds
        setTimeout(() =>{
            // Resolve the promise with the data
            resolve('Data fetched successfully');
        }, 2000);
    }
)
};

// Asynchronous function to process the data
async function processedData(){
    // Log a message to the console
    console.log("Fetching data");
    // Wait for the data to be fetched
    const data = await fetchData();
    // Log the data to the console
    console.log(data);
}

// Call the processedData function
processedData();