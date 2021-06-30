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
      

    let cardimg1 = document.querySelector('#card1img')
    let cardimg2 = document.querySelector('#card2img')
    cardimg1.src = firstCard.src;
    cardimg2.src = secondCard.src;

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
            youWin();
            
      }
      else {
            dealer.textContent = "Sorry, you lose this round.";
            youLose();
           
      
}
}


function newCard(){
      let extraCard = cards[Math.floor(Math.random() * cards.length)];
      let sumDiv = document.querySelector('.sum');
      sum += extraCard.value;
      sumDiv.textContent = `Your hand: ${sum}`

    let newCardImg = document.querySelector('#nextcardimg');
    newCardImg.src = extraCard.src;

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

function newRound(){
      // alert('New round!')
}

function stayPlay(){
     
      let opponent = document.querySelector('.opponent-sum');
      opponent.style.display = "block";
      opponent.textContent = "Your opponents hand: 18";
}

function endGame(){
      alert('you lose')
}

function youWin(){
      let currentCredit = document.querySelector('#credit');
      let currentPot = document.querySelector('#pot');
      currentCredit.textContent = parseInt(currentCredit.textContent) + parseInt(currentPot.textContent);
      currentPot.textContent = 0;
      
}

function youLose(){    
      let currentCredit = document.querySelector('#credit');
      let currentPot = document.querySelector('#pot');
      currentPot.textContent = "0";

      if (currentCredit === 0){endGame()} else {newRound();}

}

