window.addEventListener("keydown", checkKeyPressed1, false);
window.addEventListener("keydown", checkKeyPressed2, false);





// function attack1() {
function checkKeyPressed1(evnt) {
    var bar = document.getElementById("myBar2");
    var width = 100; // determines where it starts at
    if (evnt.keyCode == "65") {
      var random=(Math.floor((Math.random() * 20) + 10))
        width -= random;
        bar.style.width = width + '%'; // doesnt change it
        document.getElementById("label2").innerHTML = width * 1 + '%'; //doesnt change it

        {
            if (width <= 0) {
                // this is player 1 attacking player 2
                document.getElementById("content2").innerHTML = 'Queen Marceline <br/> Loses!';
                document.getElementById("content1").innerHTML = 'Princess Bubblegum <br/> Wins!';
            }

        }
        }

}

function checkKeyPressed2(evnt) {
    var bar = document.getElementById("myBar1");
    var width = 100; // determines where it starts at
    if (evnt.keyCode == "13") {
      var random=(Math.floor((Math.random() * 20) + 10))
        width -= random;
        bar.style.width = width + '%'; // doesnt change it
        document.getElementById("label1").innerHTML = width * 1 + '%'; //doesnt change it

        {
            if (width <= 0) {
                // this is player 1 attacking player 2
                document.getElementById("content2").innerHTML = 'Princess Bubblegum <br/> Loses!';
                document.getElementById("content1").innerHTML = 'Queen Marceline <br/> Wins!';
            }

        }
        }

}

//
// // function attack2() {
// function checkKeyPressed2(evnt) {
//     if (evnt.keyCode == "13") {
//
//   var bar = document.getElementById("myBar1");
//   var width = 100;
//   var id = setInterval(frame2,1000);
//   function frame2() {
//     if (width <= 0) {
// // this is player 2 attacking player1
//       document.getElementById("content1").innerHTML='Princess Bubblegum<br/> Loses!';
//       document.getElementById("content2").innerHTML='Queen Marceline <br/> Wins!';
//       // clearInterval(frame1);
//       // break;
//     } else {
//
//       width -=(Math.floor((Math.random() * 20) + 10));
//       bar.style.width = width + '%';
//       document.getElementById("label1").innerHTML = width * 1  + '%';
//       clearInterval(frame1);
//     }
//
//   }}
// }
