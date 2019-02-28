var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var numInput = document.querySelector("input");

var p1Display = document.querySelector("#d1");
var p2Display = document.querySelector("#d2");
var winningScoreDisplay = document.querySelector("#d3");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score==winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
			p2Display.classList.add("loser");
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score==winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
			p1Display.classList.add("loser");
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click",Reset);

function Reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.classList.remove("loser");
	p2Display.classList.remove("loser");
	gameOver = false;
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	Reset();
})