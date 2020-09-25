let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
 
 
let films = [
    'Margin Call',
    'Inside Job',
    'The China Hustle',
    'The Big Short',
    'The Wizard of Lies',
    'Starship Troopers',
    'Wargames',
    'Top Secret',
    'Dr. Strangelove',
];
 
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, films.length-1);
    result.innerText = films[index];
}); 