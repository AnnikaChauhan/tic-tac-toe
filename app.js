const gameStartUp = () => {
    const box = document.querySelectorAll('.box');
    const user1Score = document.getElementById('user1ScoreBoard');
    const user2Score = document.getElementById('user2ScoreBoard');
    const restart = document.getElementById('restart');
    let number = 0;
    let player1Score = 0;
    let player2Score = 0;

    restart.onclick = () => {
        for (let i = 0; i < box.length; i++) {
            box[i].innerHTML = "";
        }
        number = 0;
        player1Score = 0;
        player2Score = 0;
        user1Score.innerText = player1Score;
        user2Score.innerText = player2Score;
    }

    for (let i = 0; i < box.length; i++) {
        box[i].onclick = () => {
            if (box[i].innerHTML === '') {
                number += 1;
                if (number % 2 === 0) {
                    box[i].innerHTML = 'O';
                } else {
                    box[i].innerHTML = 'X';
                }
                if (box[0].innerHTML === 'X' && box[1].innerHTML === 'X' && box[2].innerHTML === 'X' || box[3].innerHTML === 'X' && box[4].innerHTML === 'X' && box[5].innerHTML === 'X' || box[6].innerHTML === 'X' && box[7].innerHTML === 'X' && box[8].innerHTML === 'X' || box[0].innerHTML === 'X' && box[3].innerHTML === 'X' && box[6].innerHTML === 'X' || box[1].innerHTML === 'X' && box[4].innerHTML === 'X' && box[7].innerHTML === 'X' || box[2].innerHTML === 'X' && box[5].innerHTML === 'X' && box[8].innerHTML === 'X' || box[0].innerHTML === 'X' && box[4].innerHTML === 'X' && box[8].innerHTML === 'X' || box[2].innerHTML === 'X' && box[4].innerHTML === 'X' && box[6].innerHTML === 'X') {
                    alert('player 1 wins');
                    user1Score.innerText = (player1Score += 1);
                    for (let i = 0; i < box.length; i++) {
                        box[i].innerHTML = "";
                    }
                    number = 0;
                } else if (box[0].innerHTML === 'O' && box[1].innerHTML === 'O' && box[2].innerHTML === 'O' || box[3].innerHTML === 'O' && box[4].innerHTML === 'O' && box[5].innerHTML === 'O' || box[6].innerHTML === 'O' && box[7].innerHTML === 'O' && box[8].innerHTML === 'O' || box[0].innerHTML === 'O' && box[3].innerHTML === 'O' && box[6].innerHTML === 'O' || box[1].innerHTML === 'O' && box[4].innerHTML === 'O' && box[7].innerHTML === 'O' || box[2].innerHTML === 'O' && box[5].innerHTML === 'O' && box[8].innerHTML === 'O' || box[0].innerHTML === 'O' && box[4].innerHTML === 'O' && box[8].innerHTML === 'O' || box[2].innerHTML === 'O' && box[4].innerHTML === 'O' && box[6].innerHTML === 'O') {
                    alert('player 2 wins');
                    user2Score.innerText = (player2Score += 1);
                    console.log(player2Score += 1);
                    for (let i = 0; i < box.length; i++) {
                        box[i].innerHTML = "";
                    }
                    number = 0;
                }
            } else {
                //turn this into a nudge??
                alert('this box is taken');
            }
            // then the conditions for a tie (e.g. all boxes are full, so give both players a half mark)

        }
    }

}

window.onload = gameStartUp;