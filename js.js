//this array has 9 slots, one for each square in the board
let gameboard = ["", "" ,"" , "" ,"" ,"" ,"" ,"" , "" ]
let player1score = 0 //plyaer1 score 
let player2score = 0 //player 2 score 
for (i in gameboard) {
	const one = document.getElementById ("" + i);
	one.textContent = gameboard[i];
}

//function that creates players
const playerFactory = function (player, mark) {
  return {player, mark};
};

//players
const Player1 = playerFactory ('Player 1', 'X');
const Player2 = playerFactory ('Player 2', 'O');

//changes div content to "X" or "O" and switches between the players
//whenever the players click a div inside de board
const square = document.querySelectorAll ("div.square") 
square.forEach((div) => {
	div.addEventListener ('click', () => {
		playerPlay (div.id, lastPlayer());
	});
	
});
const playerPlay = function (divId, markk) {
	
	gameboard[divId] = "" + markk
	const one = document.getElementById ("" + divId);
	//if statement prevents a player from changing the content inside a box
	if (one.textContent == "X" || one.textContent == "O" ) {
		lastPlayer(); 
	}
	else {
	one.textContent = gameboard[divId];
	win();
	}
}
const lastPlayer = function () {
	i++
	if (i%2 == 0) {
		return Player2.mark; 
	}
	else {
		return Player1.mark;
	}
}
let globalVariable = "fefe2023"
function getValues () {
	 a0 = document.getElementById("0").textContent;
   a1 = document.getElementById("1").textContent;
   a2 = document.getElementById("2").textContent;
   a3 = document.getElementById("3").textContent;
   a4 = document.getElementById("4").textContent;
   a5 = document.getElementById("5").textContent;
   a6 = document.getElementById("6").textContent;
   a7 = document.getElementById("7").textContent;
	 a8 = document.getElementById("8").textContent;
	return  [a0,a1,a2,a3,a4,a5,a6,a7,a8]; 
	
}
//

function  win () {
	getValues ();
	if ((a0 == a1 && a1 == a2 && a1 == "X") || (a3 == a4 && a4 == a5 && a4 == "X") || (a6 == a7 && a7 == a8 && a7 == "X") ||
		 (a0 == a3 && a3 == a6 && a3 == "X")|| (a1==a4 && a4 == a7 && a4 == "X") || (a2 == a5 && a5==a8 && a5 == "X") || (a0==a4 && a4==a8 && a4 == "X") || 
		 (a2 == a4 && a4 == a6 && a4 == "X")) {
		player1win();
		const div = document.getElementById ("displayResults");
		const displayWin = document.createElement ('p');
		displayWin.textContent = Player1.player + " wins";
		displayWin.classList.add ('winDisplay')
		displayWin.id = "winDisplay";
		div.appendChild (displayWin);
		const displayReset = document.createElement ("p");
		displayReset.id = "displayReset"
		displayReset.textContent = "Reset";
		displayReset.classList.add ('displayReset');
		div.appendChild (displayReset);
		Reset ();
	}
	else if ((a0 == a1 && a1 == a2 && a1!= "") || (a3 == a4 && a4 == a5 && a4!="") || (a6 == a7 && a7 == a8 && a7 != "") ||
		 (a0 == a3 && a3 == a6 && a3 != "")|| (a1==a4 && a4 == a7 && a4!="") || (a2 == a5 && a5==a8 && a5!="") || (a0==a4 && a4==a8 && a4!="") || 
		 (a2 == a4 && a4 == a6 && a4 != "" )){
		player2win();
		const div = document.getElementById ("displayResults");
		const displayWin = document.createElement ('p');
		displayWin.textContent = Player2.player + " wins";
		displayWin.classList.add ('winDisplay')
		displayWin.id = "winDisplay";
		div.appendChild (displayWin);
		const displayReset = document.createElement ("p");
		displayReset.id = "displayReset"
		displayReset.textContent = "Reset";
		displayReset.classList.add ('displayReset');
		div.appendChild (displayReset);
		Reset ();
			
	}
	else if (a0 != "" && a1 != "" && a2 != "" && a3 != "" 
		&& a4 != "" && a5 != "" && a6 != "" && a7 != "" && a8 != "") {
			const div = document.getElementById ("displayResults");
			const displayWin = document.createElement ('p');
			displayWin.textContent = "Tie";
			displayWin.classList.add ('winDisplay')
			displayWin.id = "winDisplay";
			div.appendChild (displayWin);
			const displayReset = document.createElement ("p");
			displayReset.id = "displayReset"
			displayReset.textContent = "Reset";
			displayReset.classList.add ('displayReset');
			div.appendChild (displayReset);
			Reset ();
	}
}

function player1win () {
	player1score++;
	const player1scoreDisplay = document.getElementById ("player1score");
	player1scoreDisplay.textContent = player1score;
	console.log (player1score);
}
function player2win () {
	player2score++;
	const player2scoreDisplay = document.getElementById ("player1score");
	player2scoreDisplay.textContent = player2score;
	console.log (player2score);
}
function Reset () {
	const displayReset = document.getElementById ("displayReset")
	displayReset.addEventListener ('click', () => {
	document.getElementById("0").textContent = "";
    document.getElementById("1").textContent = "";
    document.getElementById("2").textContent = "";
    document.getElementById("3").textContent = "";
    document.getElementById("4").textContent = "";
    document.getElementById("5").textContent = "";
    document.getElementById("6").textContent = "";
    document.getElementById("7").textContent = "";
	document.getElementById("8").textContent = "";
	const getwinDisplay = document.getElementById ("winDisplay");
	getwinDisplay.remove();
	displayReset.remove();
});
}