const readline = require("readline");
const { Chess } = require('chess.js')
var weather = require('weather-js');
const chess = new Chess()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What do you want to do? A. Generate a random game, B. Generate random game + get a visual, C. Random Dice roll and if u are super unlucky then u get a 0, D. 8ball, E. Get your local date and time, F. Get your weather!, G. Check for a leap year! Note, if you are using the terminal or git, your input may show up duplicate times!\n", function (answer) {
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
        console.log("End Position:\n")
        console.log(chess.ascii())
    }
    else if (answer == "C") {
	console.log(Math.floor(Math.random() * 7))
    }
    else if (answer == "D") {
	const responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
             "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
             "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
             "Yes.", "Yes – definitely.", "You may rely on it."]

	console.log("Think about you question in your head")
	console.log(responses[Math.floor(Math.random() * 20)])
    }
    else if (answer == "E") {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	console.log(dateTime)
    }
    else if (answer == "F") {
	weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
  		if(err) console.log(err);
		console.log(JSON.stringify(result, null, 2));
	});
    }
    else if (answer == "G") {
	function checkLeapYear(year) {

    		const leap = new Date(year, 1, 29).getDate() === 29;
    		if (leap) {
        	   console.log(year + ' is a leap year');
    	        }
		else {
        	   console.log(year + ' is not a leap year');
    	        }
	}

	const r2 = readline.createInterface({
    		input: process.stdin,
    		output: process.stdout,
	});

	r2.question("What year do you want checked for????????" , function (answer) {
		checkLeapYear(parseInt(`${answer}`))
	});
}
    else {
        console.log("Please enter the command correctly!");
    }
});


