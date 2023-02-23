document.addEventListener("DOMContentLoaded", function (event) {
  let doc = document.getElementsByClassName("boundary");
  console.log(doc[0]);
  doc[0].style.backgroundColor = "red";
});
