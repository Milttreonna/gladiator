window.addEventListener("keydown", player1, false);
window.addEventListener("keydown", player2, false);

alert("Player 1 presses A to attack. Player 2 presses Enter to attack. Don't stop! Click 'Close' when you're ready!");


function player1(evnt1) {
    var bar2 = document.getElementById("myBar2");
    // determines where it starts at
    if (evnt1.keyCode == "65") {
        var randomone = (Math.floor((Math.random() * 10) + 5));
        bar2.value -= randomone;
        var width1 = bar2.value;
        bar2.style.width = width1 + '%'; // doesnt change it
        document.getElementById("label2").innerHTML = width1 * 1 + '%'; //doesnt change it
        if (bar2.value <= 0) {
            // this is player 1 attacking player 2
            document.getElementById("content2").innerHTML = 'Queen Marceline <br/> Loses!';
            document.getElementById("content1").innerHTML = 'Princess Bubblegum <br/> Wins!';
              alert("Congratulations, Princess Bubblegum! Player 1 wins!");
              location.reload();

            // swal({
            //     title: "Congratulations, Princess Bubblegum!",
            //     text: "Player 1, You Win!",
            //     imageUrl: "bubblegumwon.gif"
            // });
        }

    }
}

function player2(evnt2) {
    var bar1 = document.getElementById("myBar1");
    // determines where it starts at
    if (evnt2.keyCode == "13") {
        var randomtwo = (Math.floor((Math.random() * 10) + 5));
        bar1.value -= randomtwo;
        var width2 = bar1.value;
        bar1.style.width = width2 + '%'; // doesnt change it
        document.getElementById("label1").innerHTML = width2 * 1 + '%'; //doesnt change it
        if (bar1.value <= 0) {
            // this is player 2 attacking player 1
            document.getElementById("content2").innerHTML = 'Queen Marceline <br/> Wins!';
            document.getElementById("content1").innerHTML = 'Princess Bubblegum <br/> Loses!';
              alert("Congratulations, Queen Marceline! Player 2 wins!");
              location.reload();


          // swal({
          //         title: "Congratulations, Queen Marceline!",
          //         text: "Player 2, You Win!",
          //         imageUrl: "marcelinewon.gif"
          //     });

        }

    }
}
