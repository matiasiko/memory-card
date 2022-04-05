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
    }
]

const gameGridEl = document.querySelector('.memory-container');
let allCardsArray = cardsArray.concat(cardsArray); // dublicate all cards
allCardsArray.sort(() => 0.5 - Math.random()) // Random all cards
let countClick = 0; // Keep track of selected clicks
let firstGuess;
let secondGuess;
let flipCount = 0;
let lockBoard = false;


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

function cardMatch() {
    if (firstGuess.dataset.name === secondGuess.dataset.name) {
        disableCards();
        return
    }
    setTimeout(() => {unFlipCards()}, 1000);
}

function unFlipCards() {
    firstGuess.classList.remove('flip');
    secondGuess.classList.remove('flip');
    reset();

}

function disableCards() {
    firstGuess.removeEventListener('click', flipCard);
    secondGuess.removeEventListener('click', flipCard);
    reset();
}

function reset() {
    flipCount = 0;

}

function flipCard() {
    if (flipCount < 2) {
        flipCount++
        if (flipCount === 1) {
            // Assign first guess
            this.classList.toggle('flip');
            firstGuess = this;
        } else {
            // Assign second guess
            this.classList.toggle('flip');
            secondGuess = this;

            cardMatch();

        }
    }
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

// setTimeout(() => {removeCards()}, 1000);
//   console.log(e.target.parentNode.dataset.name)