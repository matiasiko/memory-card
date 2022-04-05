// Display 12 cards.
// Duplicate the cards to have 2 sets of 12.
// Randomize the display of cards.
// Add selected style for selected cards.
// Only allow two cards to be selected at a time.
// Determine if two selected cards are a match and removeEventlistener.
// Reset guess count after 2.
// Add delay to selections.
// Show back of card initially and flip on select
// Finished game!


let cardsArray = [{
    card: 'angular',
    img: 'img/angular.png',
}, {
    card: 'css',
    img: 'img/css.png',
}, {
    card: 'html',
    img: 'img/html.png',
}, {
    card: 'javascript',
    img: 'img/js.png',
}, {
    card: 'laravel',
    img: 'img/laravel.png',
}, {
    card: 'php',
    img: 'img/php.png',
}, {
    card: 'react',
    img: 'img/react.png',
}, {
    card: 'wordpress',
    img: 'img/wordpress.png',
}]

const gameGridEl = document.querySelector('.memory-container');
let allCardsArray = cardsArray.concat(cardsArray); // dublicate all cards
allCardsArray.sort(() => 0.5 - Math.random()) // Random all cards
let countClick = 0; // Keep track of selected clicks
let firstGuess;
let secondGuess;
let isFlipped;


for (let i = 0; i < allCardsArray.length; i++) {
    // Create Divs
    const card = document.createElement('div');
    card.classList.add('card');
    // Create img front face and back face
    let imgFront = document.createElement('img');
    imgFront.setAttribute('class', 'front-face');
    imgFront.src = allCardsArray[i].img
    card.appendChild(imgFront);
    let imgBack = document.createElement('img');
    imgBack.setAttribute('class', 'back-face');
    imgBack.src = 'img/question.png'
    card.appendChild(imgBack);
    card.dataset.name = allCardsArray[i].card;
    gameGridEl.appendChild(card)
}

function flipCard() {
    if (this === firstGuess) return;
    if (!isFlipped) {
        isFlipped = true;
        this.classList.toggle('flip');
        firstGuess = this;
        return;
    }
    this.classList.toggle('flip');
    isFlipped = false;
    secondGuess = this;
    checkMatch();

}

function checkMatch() {
    if (firstGuess.dataset.name === secondGuess.dataset.name) {
        disableCards();
    } else {
        setTimeout(() => {
            unFlipCards()
        }, 500);
    }
}

function disableCards() {
    firstGuess.remove.addEventListener();
    secondGuess.remove.addEventListener();
}

function unFlipCards() {
    firstGuess.classList.remove('flip');
    secondGuess.classList.remove('flip');

}

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

cards.forEach((card) => {
    card.addEventListener('click', (e) => {});
});
// setTimeout(() => {removeCards()}, 1000);
//   console.log(e.target.parentNode.dataset.name)