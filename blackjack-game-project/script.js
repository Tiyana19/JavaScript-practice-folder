let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let startBtn = document.getElementsByClassName("start-btn")[0];
let newBtn = document.getElementsByClassName("new-btn")[0];
let messageEl = document.getElementsByClassName("message-el")[0];
let sumEl = document.getElementsByClassName("sum-el")[0];
let cardEl = document.getElementsByClassName("cards-el")[0];
let playerEl = document.getElementsByClassName("player-el")[0];

let message = "";
let player = {
  name: "Taruna",
  chips: 200,
};
playerEl.textContent = player.name + " : $" + player.chips;
function getRandomCard() {
  let randomeNumber = Math.floor(Math.random() * 13) + 1;
  if (randomeNumber === 1) {
    return 11;
  } else if (randomeNumber >= 11) {
    return 10;
  } else {
    return randomeNumber;
  }
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function startGame() {
  isAlive = true;
  cards = [getRandomCard(), getRandomCard()];
  sum = cards[0] + cards[1];
  renderGame();
}
function newCard() {
  if (hasBlackjack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
startBtn.addEventListener("click", startGame);

newBtn.addEventListener("click", newCard);
