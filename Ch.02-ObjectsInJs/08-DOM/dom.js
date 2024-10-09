// script.js
const changeTextBtn = document.getElementById('change-text-btn');
const textToChange = document.getElementById('text-to-change');

changeTextBtn.addEventListener('click', () => {
    textToChange.textContent = 'New text!';
});

const additionBtn = document.getElementById('addition-btn');
const additionResult = document.getElementById('addition-result');
additionBtn.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    additionResult.textContent = `Result: ${result}`;
});