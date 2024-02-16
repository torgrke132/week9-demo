const randomNumberDisplay = document.querySelector('#randomNum');
const btnGenerate = document.querySelector('button');
let previousNumber = null;


btnGenerate.addEventListener('click', (e) => {
    
    let randomNumber = Math.floor(Math.random() * 6);
    
    while (randomNumber === previousNumber) {
        randomNumber = Math.floor(Math.random() * 6);
    }
    previousNumber = randomNumber; 

    console.log(randomNumber);
    randomNumberDisplay.innerHTML = randomNumber;

    e.preventDefault();
});

