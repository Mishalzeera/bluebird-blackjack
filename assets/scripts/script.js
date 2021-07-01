const startButton = document.querySelector('#start');
startButton.addEventListener('click', initGame);

const betButton = document.querySelector('#bet');
betButton.addEventListener('click', placeBet);

const stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', stayPlay)

const opponentPlayers = [
      {
            name: "Mrs. Cheng",
            skill: 2,
            src: "assets/imgs/opponents/mrs-cheng.png"
      },
      {
            name: "Dr. Mischa Olyavetch",
            skill: 3,
            src: "assets/imgs/opponents/dr-mischa.png"
      },
      {
            name: "Sheikh Yousif bin Ahmed bin Salman",
            skill: 1,
            src: "assets/imgs/opponents/the-sheikh.png"
      },
      {
            name: "Lucy Evans",
            skill: 3,
            src: "assets/imgs/opponents/lucy.png"
      },
      {
            name: "Colonel Enrique Diaz Firpi III",
            skill: 2,
            src: "assets/imgs/opponents/colonel.png"
      },
      {
            name: "Offduty Waitress",
            skill: 1,
            src: "assets/imgs/opponents/waitress.png"
      }
]

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

function initGame(){
      startButton.removeEventListener('click', initGame)
      startButton.addEventListener('click', startGame);

      playerName = prompt('Welcome to the Bluebird Casino, Your Excellency. May we take your coat? How should we refer to your good self?');
      let nameDiv = document.querySelector('#playername');
      if (!playerName) {nameDiv.textContent = "Player"} else
      {nameDiv.textContent = playerName}

      let newOpponent = opponentPlayers[Math.floor(Math.random() * opponentPlayers.length)]
      let opponentImgDiv = document.querySelector('#opp')
      opponentImgDiv.src = newOpponent.src
      let opponentSkillDiv = document.querySelector('#skill')
      opponentSkillDiv.textContent = "Your opponent: " + newOpponent.name + " | Skill: " + newOpponent.skill
  

      startGame()
}

function startGame(){

    
      
      gameOn = true;


    startButton.textContent = "NEW CARD"
    startButton.removeEventListener('click', startGame)
    startButton.addEventListener('click', newCard);
    
    betButton.style.display = "block";

    stayButton.style.display = "block";

    currentCredit.textContent -= 10;
    currentPot.textContent = parseInt(currentPot.textContent) + 20;

    let opponentDiv = document.querySelector('.opponent');
    opponentDiv.style.display = "block";
   
      playBlackJack()

}

function playBlackJack(){

      firstCard = cards[Math.floor(Math.random() * cards.length)];
      secondCard = cards[Math.floor(Math.random() * cards.length)];
      

    let cardimg1 = document.querySelector('#card1img')
    let cardimg2 = document.querySelector('#card2img')
    cardimg1.src = firstCard.src;
    cardimg2.src = secondCard.src;

      
      if (firstCard.altValue === 11 && firstCard.altValue + secondCard.value <= 21){sum = firstCard.altValue + secondCard.value}
      else if (secondCard.altValue === 11 && firstCard.value + secondCard.altValue <= 21){sum = secondCard.altValue + firstCard.value}

      else if (firstCard.altValue === 11 && secondCard.value === 10){sum = firstCard.altValue + secondCard.value; blackJack = true;}
      else if (firstCard.value === 10 && secondCard.altValue === 11) {sum = firstCard.value + secondCard.altValue; blackJack = true;}
      
      else {sum = firstCard.value + secondCard.value;};

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
            dealer.textContent = "Choose your next move."
            
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



      if (extraCard.altValue === 11 && extraCard.altValue + sum <= 21 ) {sum += 11}
      else {sum += extraCard.value;}

      // Aces are counted as 11 when this would not make the total more than 21.
      
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

      if (currentCredit.textContent === 500){
            let newOpponent = opponentPlayers[Math.floor(Math.random() * opponentPlayers.length)]
      let opponentImgDiv = document.querySelector('#opp')
      opponentImgDiv.src = newOpponent.src
      let opponentSkillDiv = document.querySelector('#skill')
      opponentSkillDiv.textContent = "Your opponent: " + newOpponent.name + " | Skill: " + newOpponent.skill
      }
    
}

function stayPlay(){

      // Uses opponentGame function to calculate a virtual game that is then compared to Players sum value

      let opponent = document.querySelector('.opponent-sum');
      opponent.style.display = "block";
      opponent.textContent = `Your opponents hand: ${opponentGame()}`;

      compareSums();
      
}

function youWin(){
      let currentCredit = document.querySelector('#credit');
      let currentPot = document.querySelector('#pot');

      if (blackJack === true) {
            currentCredit.textContent = parseInt(currentCredit.textContent) + parseInt(currentPot.textContent) * 2 + 100;
            currentPot.textContent = 0;
      } else { currentCredit.textContent = parseInt(currentCredit.textContent) + parseInt(currentPot.textContent);
            currentPot.textContent = 0;}
      

      startButton.textContent = "OK"
      startButton.removeEventListener('click', newCard)
      startButton.addEventListener('click', refreshAll);
      
      betButton.style.display = "none";
  
      stayButton.style.display = "none";

      let opponent = document.querySelector('.opponent-sum');
      opponent.textContent = '';

      let dealer = document.querySelector('.dealer-message');

      if (blackJack === true) {dealer.textContent = 'You got Blackjack!'} else
      {dealer.textContent = 'You win this round.'};
      
      
}

function youLose(){    
      let currentCredit = document.querySelector('#credit');
      let currentPot = document.querySelector('#pot');
      currentPot.textContent = "0";

      startButton.textContent = "OK"
    startButton.removeEventListener('click', newCard)
    startButton.addEventListener('click', refreshAll);
    
    betButton.style.display = "none";

    stayButton.style.display = "none";

    let opponent = document.querySelector('.opponent-sum');
    opponent.textContent = '';

    let dealer = document.querySelector('.dealer-message');

    dealer.textContent = 'You lose this round.';

    

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

function opponentGame(){
      let firstCardOpponent = cards[Math.floor(Math.random() * cards.length)];
      let secondCardOpponent = cards[Math.floor(Math.random() * cards.length)];
      let firstOpponentCalc = firstCardOpponent.value + secondCardOpponent.value;

      let opponentSum = firstOpponentCalc; 

      if (firstOpponentCalc < 16) { opponentSum += 5}
      else if (firstOpponentCalc < 20) {opponentSum += 2}
      else if (firstOpponentCalc === 21) {youLose()}
      console.log(opponentSum);
      return opponentSum;
      
            
}

function compareSums(){
 if (sum > opponentGame()){youWin(); console.log('you win')}else{youLose(); console.log('you lose')}
}

function endGame(){
      alert('The manager has asked you to leave.');
      location.reload();
}