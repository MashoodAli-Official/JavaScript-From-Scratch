// script.js
const changeTextBtn = document.getElementById('change-text-btn');
const textToChange = document.getElementById('text-to-change');
changeTextBtn.addEventListener('click', () => {
    textToChange.textContent = 'New text!';
});
