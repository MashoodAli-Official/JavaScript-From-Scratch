"use strict";

class myName {
    constructor (name){
        this.name = name;
    }
};

class myDetails extends myName {
    constructor (name, age){
        super(name);
        this.age = age;
    }
};

const details = new myDetails("Iron man", 44);
console.log("Name is: ",details.name); //Name is:  Iron man
console.log("Age is: ",details.age); //Age is:  44