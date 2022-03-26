const readline = require("readline");
const { Chess } = require('chess.js')
const chess = new Chess()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
rl.question("What do you want to do? A. Generate a random game B. Generate random gmae + get a visual ", function (answer) {
    if (answer == "A") {
        while (!chess.game_over()) {
            const moves = chess.moves()
            const move = moves[Math.floor(Math.random() * moves.length)]
            chess.move(move)
        }
        console.log(chess.pgn())
    } 
    else if (answer == "B") {
        const chess = new Chess()

        while (!chess.game_over()) {
            const moves = chess.moves()
            const move = moves[Math.floor(Math.random() * moves.length)]
            chess.move(move)
        }
        console.log(chess.pgn())
        console.log("End position/n" + chess.ascii())
    }  
    else {
        console.log("do it correctly");
    }
});


