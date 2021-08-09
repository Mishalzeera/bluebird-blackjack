// Getting and setting the main button elements for the game, adding and removing Event Listeners etc instead of having lots of buttons in the HTML

const startButton = document.querySelector("#start");
startButton.addEventListener("click", initGame);

const betButton = document.querySelector("#bet");
betButton.addEventListener("click", placeBet);

const stayButton = document.querySelector("#stay");
stayButton.addEventListener("click", stayPlay);

const opponentButton = document.querySelector("#opp-change");
opponentButton.addEventListener("click", changeOpponent);

// The Opponents object list! Lots of fun creating them, each has their own greeting, gloat and angry sound

const opponentPlayers = [
  {
    name: "Mrs. Cheng",
    skill: 2,
    src: "assets/imgs/opponents/mrs-cheng.jpg",
    greeting: "assets/audio/voices/mrs-cheng-greeting.mp3",
    gloating: "assets/audio/voices/mrs-cheng-gloating.mp3",
    angerfail: "assets/audio/voices/mrs-cheng-angerfail.mp3",
  },
  {
    name: "Dr. Mischa Olyavetch",
    skill: 3,
    src: "assets/imgs/opponents/dr-mischa.jpg",
    greeting: "assets/audio/voices/drmischa-greeting.mp3",
    gloating: "assets/audio/voices/drmischa-gloating.mp3",
    angerfail: "assets/audio/voices/drmischa-angerfail.mp3",
  },
  {
    name: "Sheikh Jaber bin Ahmed bin Salman",
    skill: 1,
    src: "assets/imgs/opponents/the-sheikh.jpg",
    greeting: "assets/audio/voices/sheikh-greeting.mp3",
    gloating: "assets/audio/voices/sheikh-gloating.mp3",
    angerfail: "assets/audio/voices/sheikh-angerfail.mp3",
  },
  {
    name: "Miss Lucy Evans",
    skill: 3,
    src: "assets/imgs/opponents/lucy.jpg",
    greeting: "assets/audio/voices/american-greeting.mp3",
    gloating: "assets/audio/voices/american-gloating.mp3",
    angerfail: "assets/audio/voices/american-angerfail.mp3",
  },
  {
    name: "Colonel Enrique Diaz Firpi III",
    skill: 2,
    src: "assets/imgs/opponents/colonel.jpg",
    greeting: "assets/audio/voices/enrique-greeting.mp3",
    gloating: "assets/audio/voices/enrique-gloating.mp3",
    angerfail: "assets/audio/voices/enrique-angerfail.mp3",
  },
  {
    name: "Dame Emily Holz-Wilkinson",
    skill: 1,
    src: "assets/imgs/opponents/waitress.jpg",
    greeting: "assets/audio/voices/dame-greeting.mp3",
    gloating: "assets/audio/voices/dame-gloating.mp3",
    angerfail: "assets/audio/voices/dame-angerfail.mp3",
  },
];

// Global variables declared here. Code was started with the aim of having as few globals as possible.

let newOpponent;
let firstCard;
let secondCard;
let sum;
let playerName = "";
let dealerMessage = "";
let gameOn = false;
let blackJack = false;
let startCredit = 50;
let startPot = 0;
let betAmount = 10;
let opponentHand = [17, 18, 19, 20, 21];

// Sets the starting pot, where Player and Opponent each must put in 10£, also with each new round there is a 10£ buy in.

let currentCredit = document.querySelector("#credit");
currentCredit.textContent = startCredit;

let currentPot = document.querySelector("#pot");
currentPot.textContent = startPot;

function startAnimation() {
  startShow();
  gsap.timeline();

  // Bird
  gsap.fromTo(
    "#bird1",
    { opacity: 0, x: -800 },
    { duration: 0.4, opacity: 1, x: 0, rotation: 5, ease: "linear" }
  );

  // 35Smile Presents
  gsap.fromTo(
    "#anim-credit1",
    { opacity: 0, scale: 0, rotation: 0 },
    { duration: 0.2, opacity: 1, scale: 1, rotation: 0, delay: 3 }
  );
  gsap.to("#anim-credit1", { opacity: 0, duration: 0.5, delay: 5 });

  //  A Thingie Production

  gsap.fromTo(
    "#anim-credit2",
    { opacity: 0, scale: 0, rotation: 0 },
    { duration: 0.2, opacity: 1, scale: 1, rotation: 0, delay: 7 }
  );
  gsap.to("#anim-credit2", { opacity: 0, duration: 0.5, delay: 9 });

  // Title
  gsap.fromTo(
    "#anim-title",
    { opacity: 0, scale: 0, rotation: 0 },
    { duration: 0.2, opacity: 1, scale: 1, rotation: 0, delay: 11 }
  );

  // Featuring
  gsap.fromTo(
    "#anim-credit3",
    { opacity: 0, scale: 0, rotation: 0 },
    { duration: 0.2, opacity: 1, scale: 1, rotation: 0, delay: 13 }
  );

  // gsap.to("#anim-credit3", {opacity: 0, scale: 0, duration: .5, delay: 15});

  // The band
  gsap.fromTo(
    "#anim-credit4",
    { opacity: 0, scale: 0, rotation: 0 },
    { duration: 0.2, opacity: 1, scale: 1, rotation: 0, delay: 15 }
  );
  // gsap.to("#anim-credit4", {opacity: 0, scale: 0, duration: .5, delay: 22});

  // Make it all disappear
  gsap.to("#bird1", { opacity: 0, duration: 0.5, delay: 17 });
  gsap.to("#anim-title", { opacity: 0, duration: 0.5, delay: 18 });
  gsap.to("#anim-credit3", { opacity: 0, duration: 0.5, delay: 19 });
  gsap.to("#anim-credit4", { opacity: 0, duration: 0.5, delay: 19 });

  setTimeout(removeAnimationSection, 22000);
}

// Easy way for the game start button to reveal itself, since the 100vh setting of the animation section pushed it out of visibility.

function removeAnimationSection() {
  let animationSection = document.querySelector(".animation");
  document.body.removeChild(animationSection);
}

// In this case the word "Show" refers to the music program.

function startShow() {
  const music = new Audio("assets/music/the-show.mp3");
  music.play();
  music.volume = 0.5;
  music.loop = true;
}

// Init game (as opposed to startGame) gets and sets your name, selects opponent for you and starts a round of Blackjack.

function initGame() {
  // startButton goes from functioning as the initGame button to the startGame button

  startButton.removeEventListener("click", initGame);
  startButton.addEventListener("click", startGame);

  // Getting input from the player, with the added code that allows for a default "Player" name in case someone hits cancel.

  playerName = prompt(
    "Welcome to the Bluebird Casino. Enter your name, Player."
  );
  let nameDiv = document.querySelector("#playername");
  if (!playerName) {
    nameDiv.textContent = "Player";
  } else {
    nameDiv.textContent = playerName;
  }

  // Random selection of opponent from the array

  newOpponent =
    opponentPlayers[Math.floor(Math.random() * opponentPlayers.length)];

  // Shows their faces

  let opponentImgDiv = document.querySelector("#opp");
  opponentImgDiv.src = newOpponent.src;

  // Shows a skill level, which reflects in their higher probability of winning (TODO)

  let opponentSkillDiv = document.querySelector("#skill");
  opponentSkillDiv.textContent =
    newOpponent.name + " | Skill: " + newOpponent.skill;

  // Plays their greetings

  let opponentGreeting = new Audio(newOpponent.greeting);
  opponentGreeting.play();

  startGame();
}

// startGame starts a round of BlackJack

function startGame() {
  gameOn = true;

  // startGame button becomes a newCard button

  startButton.textContent = "NEW CARD";
  startButton.removeEventListener("click", startGame);
  startButton.addEventListener("click", newCard);

  //  Hidden HTML elements set to display

  betButton.style.display = "block";

  stayButton.style.display = "block";

  //     Pot updates per round

  currentCredit.textContent -= 10;
  currentPot.textContent = parseInt(currentPot.textContent) + 20;

  let opponentDiv = document.querySelector(".opponent");
  opponentDiv.style.display = "block";

  //     Basic game logic comes into play

  playBlackJack();
}

// Random selection of card from cards array (in another script, check the scripts folder, otherwise it gets a bit overwhelming)

function playBlackJack() {
  firstCard = cards[Math.floor(Math.random() * cards.length)];
  secondCard = cards[Math.floor(Math.random() * cards.length)];

  // Graphic rendering of the card objects

  let cardimg1 = document.querySelector("#card1img");
  let cardimg2 = document.querySelector("#card2img");
  cardimg1.src = firstCard.src;
  cardimg2.src = secondCard.src;

  // altValue is a way of handling the Ace issue, where "Aces are counted as 11 when this would not make the total more than 21". There must be a better syntax for this.

  if (
    firstCard.altValue === 11 &&
    firstCard.altValue + secondCard.value <= 21
  ) {
    sum = firstCard.altValue + secondCard.value;
  } else if (
    secondCard.altValue === 11 &&
    firstCard.value + secondCard.altValue <= 21
  ) {
    sum = secondCard.altValue + firstCard.value;
  } else if (firstCard.altValue === 11 && secondCard.value === 10) {
    sum = firstCard.altValue + secondCard.value;
    blackJack = true;
  } else if (firstCard.value === 10 && secondCard.altValue === 11) {
    sum = firstCard.value + secondCard.altValue;
    blackJack = true;
  } else {
    sum = firstCard.value + secondCard.value;
  }

  // Displays the sum value of your cards, so you can make the choice to get another card or stay

  let sumDiv = document.querySelector(".sum");
  sumDiv.textContent = `Your hand: ${sum}`;

  // Player area visible with relevant info

  let playerDiv = document.querySelector(".playerarea");
  playerDiv.style.display = "flex";

  // Credit colour turns red as Player hits zero

  if (currentCredit.textContent === "0") {
    currentCredit.style.color = "red";
    betButton.removeEventListener("click", placeBet);
  } else if (currentCredit.textContent < "0") {
    endGame();
  } else if (currentCredit.textContent >= "10") {
    currentCredit.style.color = "ivory";
    betButton.addEventListener("click", placeBet);
  }

  // Sets off the code that allows you to make your intitial decision, to bet or stay.

  checkCards();
}

// Sets initial logic for hand after dealing

function checkCards() {
  let dealer = document.querySelector(".dealer-message");

  if (sum <= 20) {
    dealer.textContent = "Choose your next move.";
  } else if (sum === 21) {
    dealer.textContent = "You've got Blackjack!";
    blackJack = true;
    youWin();
    // let opponentAngerfail = new Audio(newOpponent.angerfail);
    // opponentAngerfail.play();
  } else {
    dealer.textContent = "Sorry, you lose this round.";
    youLose();
    // let opponentGloating = new Audio(newOpponent.gloating);
    // opponentGloating.play();
  }
}

// Logic for getting new card

function newCard() {
  // Card drawn randomly from the array

  let extraCard = cards[Math.floor(Math.random() * cards.length)];
  let sumDiv = document.querySelector(".sum");

  // Making sure the correct interpretation of the Ace happens

  if (extraCard.altValue === 11 && extraCard.altValue + sum <= 21) {
    sum += 11;
  } else {
    sum += extraCard.value;
  }

  sumDiv.textContent = `Your hand: ${sum}`;

  let newCardImg = document.querySelector("#nextcardimg");
  newCardImg.src = extraCard.src;

  checkCards();
}

// Responds to the Bet button, adding 10£ to the pot

function placeBet() {
  let currentCredit = document.querySelector("#credit");
  currentCredit.textContent -= betAmount;

  let currentPot = document.querySelector("#pot");
  currentPot.textContent = parseInt(currentPot.textContent) + betAmount * 2;

  //      Lets Player know that she is at 0 by turning red, its the last round before the manager kicks you out, also removes the functionality of the Bet button temporarily as the Bluebird Casino sadly no longer offers credit.

  if (currentCredit.textContent === "0") {
    currentCredit.style.color = "red";
    betButton.removeEventListener("click", placeBet);
  } else if (currentCredit.textContent > "0") {
    currentCredit.style.color = "ivory";
    betButton.addEventListener("click", placeBet);
  }
}

// Handles the interface when its time for a new round with the same Opponent.

function newRound() {
  startButton.textContent = "NEW CARD";
  startButton.removeEventListener("click", newRound);
  startButton.addEventListener("click", newCard);

  betButton.style.display = "block";

  stayButton.style.display = "block";

  if (currentCredit.textContent === 500) {
    let newOpponent =
      opponentPlayers[Math.floor(Math.random() * opponentPlayers.length)];
    let opponentImgDiv = document.querySelector("#opp");
    opponentImgDiv.src = newOpponent.src;
    let opponentSkillDiv = document.querySelector("#skill");
    opponentSkillDiv.textContent =
      "Your opponent: " + newOpponent.name + " | Skill: " + newOpponent.skill;
  }
}

//  When Player chooses to not get a new card or bet, the Stay button initialises this function, which then concludes the round

function stayPlay() {
  // Uses opponentGame function to calculate a virtual game that is then compared to Players sum value

  let opponent = document.querySelector(".opponent-sum");
  opponent.style.display = "block";
  opponent.textContent = `Your opponents hand: ${opponentGame()}`;

  compareSums();
}

function changeOpponent() {
  newOpponent =
    opponentPlayers[Math.floor(Math.random() * opponentPlayers.length)];

  // Shows their ridiculous faces

  let opponentImgDiv = document.querySelector("#opp");
  opponentImgDiv.src = newOpponent.src;
  // Shows a skill level, which reflects in their higher probability of winning

  let opponentSkillDiv = document.querySelector("#skill");
  opponentSkillDiv.textContent =
    newOpponent.name + " | Skill: " + newOpponent.skill;

  // Plays their greetings

  let opponentGreeting = new Audio(newOpponent.greeting);
  opponentGreeting.play();
}

// If you win, youWin() - which allows for 2 * the pot plus 100 in the case of Blackjack

function youWin() {
  let currentCredit = document.querySelector("#credit");
  let currentPot = document.querySelector("#pot");

  if (blackJack === true) {
    currentCredit.textContent =
      parseInt(currentCredit.textContent) +
      parseInt(currentPot.textContent) * 2 +
      100;
    currentPot.textContent = 0;
  } else {
    currentCredit.textContent =
      parseInt(currentCredit.textContent) + parseInt(currentPot.textContent);
    currentPot.textContent = 0;
  }

  startButton.textContent = "OK";
  startButton.removeEventListener("click", newCard);
  startButton.addEventListener("click", refreshAll);

  betButton.style.display = "none";

  stayButton.style.display = "none";

  let opponent = document.querySelector(".opponent-sum");
  opponent.textContent = "";

  let dealer = document.querySelector(".dealer-message");

  if (blackJack === true) {
    dealer.textContent = "You got Blackjack!";
  } else {
    dealer.textContent = "You win this round.";
  }

  let opponentAngerfail = new Audio(newOpponent.angerfail);
  opponentAngerfail.play();
}

// If you lose, youLose() - Pot goes to opponent and either a new round or the manager kicks you out.

function youLose() {
  let currentCredit = document.querySelector("#credit");
  let currentPot = document.querySelector("#pot");
  currentPot.textContent = "0";

  startButton.textContent = "OK";
  startButton.removeEventListener("click", newCard);
  startButton.addEventListener("click", refreshAll);

  betButton.style.display = "none";

  stayButton.style.display = "none";

  let opponent = document.querySelector(".opponent-sum");
  opponent.textContent = "";

  let dealer = document.querySelector(".dealer-message");

  dealer.textContent = "You lose this round.";

  let opponentGloating = new Audio(newOpponent.gloating);
  opponentGloating.play();
}

// To be implemented

function refreshAll() {
  let cardimg1 = document.querySelector("#card1img");
  let cardimg2 = document.querySelector("#card2img");
  let newCardImg = document.querySelector("#nextcardimg");
  cardimg1.src = "";
  cardimg2.src = "";

  newCardImg.src = "";

  let dealer = document.querySelector(".dealer-message");
  dealer.textContent = "";

  let sumDiv = document.querySelector(".sum");
  sumDiv.textContent = ``;

  startButton.textContent = "NEXT ROUND";
  startButton.removeEventListener("click", refreshAll);
  startButton.addEventListener("click", startGame);
}

// Logic for the opponent game behind the scenes - which is actually the same as the Player game in that it uses random cards - the only hard coded part is that I tried to average out when a person would choose to get another card or stay. To be implemented

function opponentGame() {
  let firstCardOpponent = cards[Math.floor(Math.random() * cards.length)];
  let secondCardOpponent = cards[Math.floor(Math.random() * cards.length)];
  let firstOpponentCalc = firstCardOpponent.value + secondCardOpponent.value;

  let opponentSum = firstOpponentCalc;

  if (firstOpponentCalc < 16) {
    opponentSum += 5;
  } else if (firstOpponentCalc < 20) {
    opponentSum += 2;
  } else if (firstOpponentCalc === 21) {
    youLose();
  }
  console.log(opponentSum);
  return opponentSum;
}

// Final sum compare, which determines who wins the round if things have gotten far enough that both Player and Opponents hands have developed.

function compareSums() {
  if (sum > opponentGame()) {
    youWin();
    console.log("you win");
  } else {
    youLose();
    console.log("you lose");
  }
}

// "If you want to play, well then you've got to pay" - Shopkeeper in Demon's Souls

function endGame() {
  alert("The manager has asked you to leave.");
  currentCredit.textContent = startCredit;
  initGame();
}
