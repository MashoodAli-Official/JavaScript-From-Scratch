const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('IncrementBtn');
const decrementBtn = document.getElementById('DecrementBtn');

// counter initialization
let counter = 0;
// function to update the counter
function updateCounter() {
    counterElement.textContent = counter;
}
// event listeners of increment
incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// event listeners of decrement
decrementBtn.addEventListener('click', () => {
    if(counter > 0) {
        counter --;
    }
    updateCounter();
});