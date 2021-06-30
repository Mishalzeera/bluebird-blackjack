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
let startPot = 0;
let betAmount = 10;
let opponentHand = [17, 18, 19, 20, 21];

let currentCredit = document.querySelector('#credit');
currentCredit.textContent = startCredit;

  let currentPot = document.querySelector('#pot');
  currentPot.textContent = startPot;






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

    currentCredit.textContent -= 10;
    currentPot.textContent = parseInt(currentPot.textContent) + 20;

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

    if (currentCredit.textContent === "0"){currentCredit.style.color = "red"; 
    betButton.removeEventListener('click', placeBet)
    ;
} else if (currentCredit.textContent < "0") {endGame()}
      else if (currentCredit.textContent >= "10") {currentCredit.style.color = "ivory"}

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
     ;
}
     
      
}

function newRound(){
      startButton.textContent = "NEW CARD"
    startButton.removeEventListener('click', newRound)
    startButton.addEventListener('click', newCard);
    
    betButton.style.display = "block";

    stayButton.style.display = "block";

      
    
}

function stayPlay(){
     
      let opponent = document.querySelector('.opponent-sum');
      opponent.style.display = "block";
      opponent.textContent = "Your opponents hand: 18";
}

function endGame(){
      alert('The manager has asked you to leave.');
      location.reload();
}

function youWin(){
      let currentCredit = document.querySelector('#credit');
      let currentPot = document.querySelector('#pot');
      currentCredit.textContent = parseInt(currentCredit.textContent) + parseInt(currentPot.textContent);
      currentPot.textContent = 0;

      startButton.textContent = "OK"
      startButton.removeEventListener('click', newCard)
      startButton.addEventListener('click', refreshAll);
      
      betButton.style.display = "none";
  
      stayButton.style.display = "none";

      let opponent = document.querySelector('.opponent-sum');
      opponent.textContent = '';
      
}

function youLose(){    
      let currentCredit = document.querySelector('#credit');
      let currentPot = document.querySelector('#pot');
      currentPot.textContent = "0";

      // if (currentCredit === 0){endGame()} else {newRound();}

      startButton.textContent = "OK"
    startButton.removeEventListener('click', newCard)
    startButton.addEventListener('click', refreshAll);
    
    betButton.style.display = "none";

    stayButton.style.display = "none";

    let opponent = document.querySelector('.opponent-sum');
    opponent.textContent = '';



    

}

function refreshAll(){

      let cardimg1 = document.querySelector('#card1img')
    let cardimg2 = document.querySelector('#card2img')
    let newCardImg = document.querySelector('#nextcardimg');
    cardimg1.src = ''
    cardimg2.src = ''
    
    newCardImg.src = ''

    let dealer = document.querySelector('.dealer-message')
    dealer.textContent = '';

    let sumDiv = document.querySelector('.sum')
    sumDiv.textContent = ``

    startButton.textContent = "NEXT ROUND"
    startButton.removeEventListener('click', refreshAll);
    startButton.addEventListener('click', startGame)
    
}

// function opponentGame(){
//       let firstCardOpponent = cards[Math.floor(Math.random() * cards.length)];
//       let secondCardOpponent = cards[Math.floor(Math.random() * cards.length)];
//       let firstOpponentCalc = firstCardOpponent.value + secondCardOpponent.value;

//       if (firstOpponentCalc < 16) { return firstOpponentCalc + 8}
//       else if (firstOpponentCalc < 20) {return firstOpponentCalc + 2}
//       else if (firstOpponentCalc > 21) {return youWin()}
            
// }