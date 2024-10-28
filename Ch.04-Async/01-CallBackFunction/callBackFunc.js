'use strict';

// Defining a function
function myHeros(callback){
    console.log("My Favorite Hero is: Iron Man");
    setTimeout(callback, 4000);
}
//Defining a callback function
function heroName(){
    console.log("Iron Man is Tony Stark in the movie");
}
myHeros(heroName);