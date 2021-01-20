let gameboard = ["1", "2", "3", "4", "5", "6", "7","8", "9"]

for (i in gameboard) {
	const one = document.getElementById ("" + i);
	one.textContent = gameboard[i];
}
const playerFactory = function (player, mark) {
  return {player, mark};
};
const Player1 = playerFactory ('player1', 'X');
const Player2 = playerFactory ('player2', 'O');

const square = document.querySelectorAll ("div.square") 
square.forEach((div) => {
	div.addEventListener ('click', () => {
		playerPlay (div.id, lastPlayer());
	});
	
});
const playerPlay = function (divId, markk) {
	
	gameboard[divId] = "" + markk
	const one = document.getElementById ("" + divId);
	if (one.textContent == "X" || one.textContent == "O") {
		lastPlayer();
	}
	else {
	one.textContent = gameboard[divId];}
	win ();
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
//win logic
function  win () {
	getValues ();
	console.log (a2);
	if ((a0 == a1 && a1 == a2 && a1 == "X") || (a3 == a4 && a4 == a5 && a4 == "X") || (a6 == a7 && a7 == a8 && a7 == "X") ||
		 (a0 == a3 && a3 == a6 && a3 == "X")|| (a1==a4 && a4 == a7 && a4 == "X") || (a2 == a5 && a5==a8 && a5 == "X") || (a0==a4 && a4==a8 && a4 == "X") || 
		 (a2 == a4 && a4 == a6 && a4 == "X")) {
		return console.log (Player1.player + " wins");
	}
	else if ((a0 == a1 && a1 == a2) || (a3 == a4 && a4 == a5) || (a6 == a7 && a7 == a8) ||
		 (a0 == a3 && a3 == a6)|| (a1==a4 && a4 == a7) || (a2 == a5 && a5==a8) || (a0==a4 && a4==a8) || 
		 (a2 == a4 && a4 == a6 )){
		return console.log (`${Player2.player} wins`);
	}
	
	else if (a0 != undefined && a1 != undefined && a2 != undefined && a3 != undefined 
		&& a4 != undefined && a5 != undefined && a6 != undefined && a7 != undefined && a8 != undefined) {
			return console.log ("tie");
	}
}