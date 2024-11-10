// Encapsulation in Javascript 
// How to keep certain data and functions private to an object, so they can only be accessed or modified in controlled ways.
'use strict';

// Class to manage a user's bank account
class userBankAccount {
    #userBalance = 0; // Private field to store user's balance, only accessible within the class

    // Method to deposit money into account
    // Only accepts positive amounts
    depositedAmount (amount){
        if(amount > 0){
            this.#userBalance += amount;
        }
    };

    // Public method to check account balance
    availableBalance(){
        return this.#userBalance; // Returns the current balance without exposing the private field
    }
};

const accountDetails = new userBankAccount(); // Create new instance of bank account
accountDetails.depositedAmount(4000);  // Deposit 4000 into account
console.log(accountDetails.availableBalance()); // Display current balance using public method
// Trying to access private field directly results in error/undefined
console.log(accountDetails.userBalance); // undefined