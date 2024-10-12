"use Strict";

class MyProgram {
    constructor(programName){
        this.programName = programName;
    };
    getProgramName(){
        console.log(`My Program name is : ${this.programName}`);
    }
}
const programDetails = new MyProgram("Computer Science");
programDetails.getProgramName();
