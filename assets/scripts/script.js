const startButton = document.querySelector('#start');
startButton.addEventListener('click', startGame);

const betButton = document.querySelector('#bet');
betButton.addEventListener('click', placeBet);

let firstCard = 5;
let secondCard = 7;

let sum = firstCard + secondCard;

let playerName = '';
let gameOn = false;
let blackJack = false;
let startCredit = 50;
let startPot = 10;
let betAmount = 10;


function startGame(){

      // playerName = prompt('Enter your name, bluebird.');
      // let nameDiv = document.querySelector('#playername');
      // nameDiv.textContent = playerName;

      gameOn = true;

    startButton.textContent = "NEW CARD"
    startButton.removeEventListener('click', startGame)
    startButton.addEventListener('click', newCard);
    
    betButton.style.display = "block";

    let card1 = document.querySelector('#card1');
      card1.textContent = firstCard;
    let card2 = document.querySelector('#card2');
    card2.textContent = secondCard;

      let sumDiv = document.querySelector('.sum')
      sumDiv.textContent = sum;

    let playerDiv = document.querySelector('.playerarea');
    playerDiv.style.display = "flex";

    let currentCredit = document.querySelector('#credit');
    currentCredit.textContent = startCredit;

      let currentPot = document.querySelector('#pot');
      currentPot.textContent = startPot;

}

function newCard(){
      console.log('new card!')
}

function placeBet(){
      
      let currentCredit = document.querySelector('#credit');
    currentCredit.textContent -= betAmount;

    let currentPot = document.querySelector('#pot'); 
     currentPot.textContent = parseInt(currentPot.textContent) + (betAmount * 2);
      
}