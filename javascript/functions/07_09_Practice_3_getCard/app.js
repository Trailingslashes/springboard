// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
  cards = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  suit = ["clubs", "spades", "hearts", "diamonds"];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  const randomSuit = suit[Math.floor(Math.random() * suit.length)];
  return { value: randomCard, suit: randomSuit };
}

console.log(getCard());
