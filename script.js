const Player = (name) => {
    const RNG = (max) => max = Math.floor(Math.random() * 6) + 1;
    const dieOne = RNG();
    const dieTwo = RNG();
    const dieTotal = () => dieOne + dieTwo    
    const winMessageOne = () => console.log(name, "wins!");
    const winMessageTwo = () => console.log(name, "wins with a DOUBLE!");
    return {name, dieOne, dieTwo, dieTotal, winMessageOne, winMessageTwo}
};

const tie = {
     messageOne: "It's a tie!",
     messageTwo: "It's a tie with a DOUBLE!",
 };

const player1 = Player("Player");
const player2 = Player("Computer");
 
 function gameStart() {    
    console.log("\n", "🎲",player1.dieOne, "🎲", player1.dieTwo, "\n", "🎲", player2.dieOne, "🎲", player2.dieTwo);
    if (player1.dieOne === player1.dieTwo && player2.dieOne === player2.dieTwo ||
        player1.dieOne === player2.dieOne && player1.dieTwo === player2.dieTwo) {
        console.log(tie.messageTwo);
    }
    else if (player1.dieOne === player1.dieTwo && player2.dieOne !== player2.dieTwo) {
        player1.winMessageTwo();
    }
    else if (player2.dieOne === player2.dieTwo && player1.dieOne !== player1.dieTwo) {
        player2.winMessageTwo();
    }
    else if (player1.dieTotal() === player2.dieTotal()) {
        console.log(tie.messageOne);
    }
    else if (player1.dieTotal() > player2.dieTotal()) {
        player1.winMessageOne();
    }
    else {
        player2.winMessageOne();
    };
 };