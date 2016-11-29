window.addEventListener("keydown", checkKeyPressed1, false);
window.addEventListener("keydown", checkKeyPressed2, false);





// function attack1() {
  function checkKeyPressed1(evnt) {
      if (evnt.keyCode == "65") {
  var bar = document.getElementById("myBar2");
  var width = 100; // determines where it starts at
  var id = setInterval(frame,1000);
  function frame() {
    if (width <= 0) {

        document.getElementById("content2").innerHTML='Queen Marceline <br/> Loses!';
        document.getElementById("content1").innerHTML='Princess Bubblegum <br/> Wins!';
      // break;
    } else {

      width -=(Math.floor((Math.random() * 20) + 10));
      bar.style.width = width + '%';
      document.getElementById("label2").innerHTML = width * 1  + '%';
    }
  }
}}

function checkKeyPressed2(evnt) {
    if (evnt.keyCode == "13") {

  var bar = document.getElementById("myBar1");
  var width = 100;
  var id = setInterval(frame,1000);
  function frame() {
    if (width <= 0) {

      document.getElementById("content1").innerHTML='Princess Bubblegum<br/> Loses!';
      document.getElementById("content2").innerHTML='Queen Marceline <br/> Wins!';

      // break;
    } else {

      width -=(Math.floor((Math.random() * 20) + 10));
      bar.style.width = width + '%';
      document.getElementById("label1").innerHTML = width * 1  + '%';
    }

  }}
}
