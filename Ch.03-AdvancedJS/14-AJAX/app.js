'use strict';
// Creating an XMLHttpRequest object
var ajax = new XMLHttpRequest();

// Defining the URL of the server-side API
var url = 'https://example.com/data';

// Defining the type of the request (GET)
ajax.open('GET', url, true);

// Send the request
ajax.send();

// Defining a callback function to handle the response
ajax.onload = function() {
  if (ajax.status === 200) {
    var apiData = ajax.responseText;
    document.getElementById('apiData').innerHTML = apiData;
  } else {
    console.log('Error: ' + ajax.statusText);
  }
};