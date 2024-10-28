'use strict';
let localTime = new Date();
console.log(localTime);
setInterval (()=> {
    localTime = new Date(); //we are adding localTime here to update the time automatically.
    document.getElementById('time').innerHTML = localTime;
})