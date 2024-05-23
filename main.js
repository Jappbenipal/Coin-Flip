// COIN FLIP SIMULATOR

// HTML Variables
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

// HTML Variables
let outputEl = documet.getElementById("output");
let onesEl = document.getElementById("ones-out");
let twosEl = document.getElementById("twos-out");
let threesEl = document.getElementById("threes-out");
let foursEL = document.getElementById("fours-out");
let fivesEl = document.getElementById("fives-out");
let sixesEl = document.getElementById("sixes-out");

// Count Variables
let numOnes = 1;
let numTwos = 2;
let numThrees = 3;
let numFours = 4;
let numFives = 5;
let numSixes = 6;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let ranNum = Math.random();
  console.log(randNum);

  // Stimulate the die roll
  if (randNum < 1.5) {
    outputEl.innerHTML = ""
  }
}
