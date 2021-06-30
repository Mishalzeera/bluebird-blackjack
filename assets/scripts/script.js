const startButton = document.querySelector('#start');
startButton.addEventListener('click', startGame);

const betButton = document.querySelector('#bet');
betButton.addEventListener('click', placeBet);

const stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', stayPlay)

let firstCard = Math.floor(Math.random() * 10 + 1);
let secondCard = Math.floor(Math.random() * 10 + 1);

let sum = firstCard + secondCard;

let playerName = '';
let dealerMessage = '';
let gameOn = false;
let blackJack = false;
let startCredit = 50;
let startPot = 10;
let betAmount = 10;
let opponentHand = [17, 18, 19, 20, 21];






function startGame(){

      // playerName = prompt('Welcome to the Bluebird Casino! Please enter your name.');
      // let nameDiv = document.querySelector('#playername');
      // if (!playerName) {nameDiv.textContent = "Player"} else
      // {nameDiv.textContent = playerName}
      
      gameOn = true;

    startButton.textContent = "NEW CARD"
    startButton.removeEventListener('click', startGame)
    startButton.addEventListener('click', newCard);
    
    betButton.style.display = "block";

    stayButton.style.display = "block";

    

      playBlackJack()

}



function playBlackJack(){

      let card1 = document.querySelector('#card1');
      card1.textContent = firstCard;
    let card2 = document.querySelector('#card2');
    card2.textContent = secondCard;

      let sumDiv = document.querySelector('.sum')
      sumDiv.textContent = `Your hand: ${sum}`

    let playerDiv = document.querySelector('.playerarea');
    playerDiv.style.display = "flex";

    let currentCredit = document.querySelector('#credit');
    currentCredit.textContent = startCredit;

      let currentPot = document.querySelector('#pot');
      currentPot.textContent = startPot;
      let dealer = document.querySelector('.dealer-message')

      if (sum < 20) {
            dealer.textContent = "Would you like to stay, or would you like another card?"
            
      }
      else if (sum === 21) {
            dealer.textContent = "You've got Blackjack!"
            blackJack = true;
            
      }
      else if (sum > 21) {
            dealer.textContent = "Sorry, you lose this round.";
            
}
}

function newCard(){
      let extraCard = Math.floor(Math.random() * 10 + 1);
      let sumDiv = document.querySelector('.sum')
      sumDiv.textContent = `Your hand: ${sum += extraCard}`
      playBlackJack();

}

function placeBet(){
      
      let currentCredit = document.querySelector('#credit');
    currentCredit.textContent -= betAmount;

    let currentPot = document.querySelector('#pot'); 
     currentPot.textContent = parseInt(currentPot.textContent) + (betAmount * 2);
      
}

function stayPlay(){
      let opponent = document.querySelector('.opponent-sum');
      opponent.style.display = "block";
      opponent.textContent = "Your opponents hand: 18";
}

