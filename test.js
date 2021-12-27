let againBtn = document.getElementsByClassName("again");
let score = document.getElementsByClassName("score");
let highScore = document.getElementsByClassName("highScore");
let allScore = 0;
let x = 0;
let curectNum = document.querySelector(".question");
let startGuess = document.querySelector(".startGuess");

function checkNum() {
  let accidentNum = Math.floor(Math.random() * 10 + 1);
  let inputNum = document.querySelector(".inputNum").value;
  let getScore = 0;
  if (inputNum != "") {
    curectNum.innerHTML = accidentNum;
    if (inputNum <= 10) {
      if (accidentNum == inputNum) {
        document.querySelector(".question").style.backgroundColor = "green";
        document.querySelector(".header").style.borderColor = "green";
        document.querySelector(".score").style.color = "green";
        getScore = 10;
        allScore += 10;
        startGuess.innerHTML = "✅";
      } else {
        document.querySelector(".question").style.backgroundColor = "red";
        document.querySelector(".header").style.borderColor = "red";
        document.querySelector(".score").style.color = "red";
        getScore = 0;
        allScore += 0;
        startGuess.innerHTML = "❌";
      }

      score[0].innerHTML = getScore;
      highScore[0].innerHTML = allScore;
    } else {
      document.querySelector(".header").style.borderColor = "black";
      document.querySelector(".question").style.backgroundColor = "black";
      curectNum.innerHTML = "?";
      highScore[0].innerHTML = 0;
      document.querySelector(".inputNum").value = "";
      startGuess.innerHTML = "start guessting . . .";
      alert("Between 1 and 10");
    }
  } else {
    alert("Guess a Number");
  }
  x = getScore;
}
allScore += x;

function resetGame() {
  x = 0;
  document.querySelector(".header").style.borderColor = "black";
  document.querySelector(".question").style.backgroundColor = "black";
  curectNum.innerHTML = "?";
  highScore[0].innerHTML = 0;
  document.querySelector(".inputNum").value = "";
  startGuess.innerHTML = "start guessting . . .";
  score[0].innerHTML = 0;
  document.querySelector(".score").style.color = "black";
}
