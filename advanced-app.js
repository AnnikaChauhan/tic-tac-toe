const gameStartUp = () => {
    const box = document.querySelectorAll('.box');
    const user1Score = document.getElementById('user1ScoreBoard');
    const user2Score = document.getElementById('user2ScoreBoard');
    const restart = document.getElementById('restart');
    let number = 0;
    let player1Score = 0;
    let player2Score = 0;
    let gameArray = ["","","","","","","","",""];

    const turnSwitcher = (player, index) => {
        if(player.innerText === "") {
            number += 1;
            if(number % 2 === 0) {
                player.innerText = "O";
                gameArray[index] = "O";
                console.log(gameArray);
            } else {
                player.innerText = "X";
                gameArray[index] = "X";
                console.log(gameArray);
            }
        } else {
            alert('this box is taken, pick another box');
            
        }
    }

    const winningBoxesForX = (first,second,third) => gameArray[first] === 'X' && gameArray[second] === 'X' && gameArray[third] === 'X';

    const winningBoxesForO = (first,second,third) => gameArray[first] === 'O' && gameArray[second] === 'O' && gameArray[third] === 'O';

    const winningConditions = () => {
        if (winningBoxesForX(0,1,2) || winningBoxesForX(3,4,5) || winningBoxesForX(6,7,8) || winningBoxesForX(0,3,6) || winningBoxesForX(1,4,7) || winningBoxesForX(2,5,8) || winningBoxesForX(0,4,8) || winningBoxesForX(2,4,6)) {
            alert('player 1 wins');
            user1Score.innerText = (player1Score += 1);
            for (let i = 0; i < box.length; i++) {
                box[i].innerHTML = "";
            }
            for (let i = 0; i < gameArray.length; i++){
                gameArray[i] = "";
            }
            number = 0;
        } else if (winningBoxesForO(0,1,2) || winningBoxesForO(3,4,5) || winningBoxesForO(6,7,8) || winningBoxesForO(0,3,6) || winningBoxesForO(1,4,7) || winningBoxesForO(2,5,8) || winningBoxesForO(0,4,8) || winningBoxesForO(2,4,6)) {
            alert('player 2 wins');
            user2Score.innerText = (player2Score += 1);
            for (let i = 0; i < box.length; i++){
                box[i].innerHTML = "";
            }
            for (let i = 0; i < gameArray.length; i++){
                gameArray[i] = "";
            }
            number = 0;
        } else if (gameArray[0] != "" && gameArray[1] != "" &&gameArray[2] != "" && gameArray[3] != "" && gameArray[4] != "" && gameArray[5] != "" && gameArray[6] != "" && gameArray[7] != "" && gameArray[8] != "") {
            alert('no winner');
            user1Score.innerText = (player1Score+=0.5);
            user2Score.innerText = (player2Score+=0.5);
            for (let i = 0; i < box.length; i++){
                box[i].innerHTML = "";
            }
            for (let i = 0; i < gameArray.length; i++){
                gameArray[i] = "";
            }
            number = 0;
        }
    }

    const winningScoreConditions = () => {
        if (user1Score.innerText > user2Score.innerText){
            user1Score.style.fontWeight = 'bold';
            user1Score.style.color = 'green';
            user2Score.style.fontWeight = 'normal';
            user2Score.style.color = 'black';
        } else if (user1Score.innerText < user2Score.innerText){
            user1Score.style.fontWeight = 'normal';
            user1Score.style.color = 'black';
            user2Score.style.fontWeight = 'bold';
            user2Score.style.color = 'green';
        } else {
            user1Score.style.fontWeight = 'normal';
            user1Score.style.color = 'black';
            user2Score.style.fontWeight = 'normal';
            user2Score.style.color = 'black';
        }
    }

    for (let i = 0; i < box.length; i++){
        box[i].onclick = () => { 
            turnSwitcher(box[i],i);
            winningConditions();
            winningScoreConditions();
        }
    }

    restart.onclick = () => {
        for (let i = 0; i < box.length; i++) {
            box[i].innerHTML = "";
        }
        number = 0;
        player1Score = 0;
        player2Score = 0;
        user1Score.innerText = player1Score;
        user2Score.innerText = player2Score;
        winningScoreConditions();
    }
}

window.onload = gameStartUp;