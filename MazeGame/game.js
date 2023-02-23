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

  //if we lose
  function Lose() {
    for (let i = 0; i < doc.length - 1; i++) {
      doc[i].style.backgroundColor = "red";
    }
    status.innerHTML = "YOU LOSE";
    score -= 10;
    scoreboard[0].innerHTML = `score: ${score}`;
  }

  // reset
  document.getElementById("start").addEventListener("click", function () {
    status.innerHTML = `Begin by moving your mouse over the "S"`;
    for (let i = 0; i < doc.length - 1; i++) {
      doc[i].style.backgroundColor = "rgb(238, 238, 238)";
    }
  });

  //if we win
  document.getElementById("end").addEventListener("mouseover", function () {
    status.innerHTML = "YOU WIN";
    score += 5;
    scoreboard[0].innerHTML = `score: ${score}`;
  });
});
