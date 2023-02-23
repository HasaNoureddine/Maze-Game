document.addEventListener("DOMContentLoaded", function (event) {
  let score = 0;
  let scoreboard = document.getElementsByClassName("boundary example");
  scoreboard[0].innerHTML = `score: ${score}`;

  let status = document.getElementById("status");
  let doc = document.getElementsByClassName("boundary");
  doc[0].addEventListener("mouseover", Lose);
  doc[1].addEventListener("mouseover", Lose);
  doc[2].addEventListener("mouseover", Lose);
  doc[3].addEventListener("mouseover", Lose);
  doc[4].addEventListener("mouseover", Lose);

  function Lose() {
    for (let i = 0; i < doc.length - 1; i++) {
      doc[i].style.backgroundColor = "red";
    }
    status.innerHTML = "YOU LOSE";
    score -= 10;
    scoreboard[0].innerHTML = `score: ${score}`;
  }

  let btn = document.getElementById("start");
  btn.addEventListener("click", reset);
  function reset() {
    status.innerHTML = `Begin by moving your mouse over the "S"`;
    for (let i = 0; i < doc.length - 1; i++) {
      doc[i].style.backgroundColor = "rgb(238, 238, 238)";
    }
  }

  let btn2 = document.getElementById("end");
  btn2.addEventListener("mouseover", win);
  function win() {
    status.innerHTML = "YOU WIN";
    score += 5;
    scoreboard[0].innerHTML = `score: ${score}`;
  }
});
