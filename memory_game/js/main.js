
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2){
  if (cardsInPlay[1] === cardsInPlay[0]) {
    alert("you found a match!");
  } else {
    alert("Sorry try again");
  }

}

console.log("User flipped " + cardsInPlay);
