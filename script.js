function randomNumberGenerator(max) {
    return max = Math.floor(Math.random() * max) + 1;
 };
 
class Player {
    constructor(name) {
        this.name = name;
        this.dieOne = randomNumberGenerator(6);
        this.dieTwo = randomNumberGenerator(6);
        this.dieTotal = this.dieOne + this.dieTwo;
        this.winMessageOne = name + " wins!";
        this.winMessageTwo = name + " wins with a DOUBLE!";
    };
};

const tie = {
     messageOne: "It's a tie!",
     messageTwo: "It's a tie with a DOUBLE!",
 };

const player1= new Player("Player");
const player2 = new Player("Computer");
 
 function gameStart() {

    console.log("\n", "🎲",player1.dieOne, "🎲", player1.dieTwo, "\n", "🎲", player2.dieOne, "🎲", player2.dieTwo);
    if (player1.dieOne === player1.dieTwo && player2.dieOne === player2.dieTwo ||
        player1.dieOne === player2.dieOne && player1.dieTwo === player2.dieTwo) {
        console.log(tie.messageTwo);
    }
    else if (player1.dieOne === player1.dieTwo && player2.dieOne !== player2.dieTwo) {
        console.log(player1.winMessageTwo);
    }
    else if (player2.dieOne === player2.dieTwo && player1.dieOne !== player1.dieTwo) {
        console.log(player2.winMessageTwo);
    }
    else if (player1.dieTotal === player2.dieTotal) {
        console.log(tie.messageOne);
    }
    else if (player1.dieTotal > player2.dieTotal) {
        console.log(player1.winMessageOne);
    }
    else {
        console.log(player2.winMessageOne);
    };
 };
 gameStart();