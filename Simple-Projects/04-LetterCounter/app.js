'use strict';
let textInput = document.getElementById('textInput');
let letterCounter = document.getElementById('counter');

textInput.addEventListener('input', () => {
    letterCounter.textContent = textInput.value.length;
});