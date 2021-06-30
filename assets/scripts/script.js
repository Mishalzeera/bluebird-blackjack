const startButton = document.querySelector('#start');
startButton.addEventListener('click', startGame);

const betButton = document.querySelector('#bet');
betButton.addEventListener('click', placeBet);

const stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', stayPlay)


let firstCard;
let secondCard;

let sum; 

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

      firstCard = cards[Math.floor(Math.random() * cards.length)];
      secondCard = cards[Math.floor(Math.random() * cards.length)];
      

      let card1 = document.querySelector('#card1');
      card1.textContent = firstCard.value;
    let card2 = document.querySelector('#card2');
    card2.textContent = secondCard.value;

      sum = firstCard.value + secondCard.value;

      let sumDiv = document.querySelector('.sum')
      sumDiv.textContent = `Your hand: ${sum}`

    let playerDiv = document.querySelector('.playerarea');
    playerDiv.style.display = "flex";

    let currentCredit = document.querySelector('#credit');
    currentCredit.textContent = startCredit;

      let currentPot = document.querySelector('#pot');
      currentPot.textContent = startPot;

      checkCards();

}

function checkCards(){
      let dealer = document.querySelector('.dealer-message')

      if (sum <= 20) {
            dealer.textContent = "Would you like to stay, or would you like another card?"
            
      }
      else if (sum === 21) {
            dealer.textContent = "You've got Blackjack!"
            blackJack = true;
            
      }
      else {
            dealer.textContent = "Sorry, you lose this round.";
           
      
}
}


function newCard(){
      let extraCard = cards[Math.floor(Math.random() * cards.length)];
      let sumDiv = document.querySelector('.sum');
      sum += extraCard.value;
      sumDiv.textContent = `Your hand: ${sum}`

      checkCards();

}

function placeBet(){
      
      let currentCredit = document.querySelector('#credit');
    currentCredit.textContent -= betAmount;
    

    let currentPot = document.querySelector('#pot'); 
     currentPot.textContent = parseInt(currentPot.textContent) + (betAmount * 2);

     if (currentCredit.textContent === "0"){currentCredit.style.color = "red"; 
     betButton.removeEventListener('click', placeBet)
     endGame();
}
     
      
}

function stayPlay(){
      let opponent = document.querySelector('.opponent-sum');
      opponent.style.display = "block";
      opponent.textContent = "Your opponents hand: 18";
}

function endGame(){
      console.log('you lose')
}