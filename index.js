let flag = 0
let winner = '';
let counter = 0;
function localplayer(position) {

    if (position.innerHTML == '') {
        counter++;
        if (flag == 0) {
            position.innerHTML = 'O';
            flag = 1;
        }
        else {
            position.innerHTML = 'X';
            flag = 0;
        }
    }
    checkwinner();
}
function checkwinner() {
    let board = document.getElementsByClassName('innerbox');
    // if (board[0].innerHTML == 'O') { console.log('done'); }

    if (board[0].innerHTML == board[1].innerHTML && board[1].innerHTML == board[2].innerHTML && board[0].innerHTML != '') {
        if (board[0].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[3].innerHTML == board[4].innerHTML && board[4].innerHTML == board[5].innerHTML && board[3].innerHTML != '') {
        if (board[3].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[6].innerHTML == board[7].innerHTML && board[7].innerHTML == board[8].innerHTML && board[6].innerHTML != '') {
        if (board[6].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[0].innerHTML == board[3].innerHTML && board[3].innerHTML == board[6].innerHTML && board[0].innerHTML != '') {
        if (board[0].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[1].innerHTML == board[4].innerHTML && board[4].innerHTML == board[7].innerHTML && board[1].innerHTML != '') {
        if (board[1].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[2].innerHTML == board[5].innerHTML && board[5].innerHTML == board[8].innerHTML && board[2].innerHTML != '') {
        if (board[2].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[0].innerHTML == board[4].innerHTML && board[4].innerHTML == board[8].innerHTML && board[0].innerHTML != '') {
        if (board[0].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }

    else if (board[2].innerHTML == board[4].innerHTML && board[4].innerHTML == board[6].innerHTML && board[2].innerHTML != '') {
        if (board[2].innerHTML == 'O')
            winner = 'O';
        else
            winner = 'X';
        win();
    }
    else if (counter == 9 || compcounter == 5)
        win();

}
function win() {
    if (winner == 'O')
        // alert("Winner is 'O'")
        document.getElementById('popup_p1').style.display = 'block'
    else if (winner == 'X')
        // alert("Winner is 'X'")
        document.getElementById('popup_p2').style.display = 'block'
    else
        // alert('Draw')
        document.getElementById('draw').style.display = 'block'
    // location.reload()
}
let compcounter = 0;
function computer(position) {
    if (position.innerHTML == '') {
        compcounter++;
        position.innerHTML = 'O';

        let board = document.getElementsByClassName('innerbox');

        if (board[0].innerHTML == board[1].innerHTML && board[2].innerHTML == '' && board[1].innerHTML != '')
            board[2].innerHTML = 'X';
        else if (board[0].innerHTML == board[2].innerHTML && board[1].innerHTML == '' && board[0].innerHTML != '')
            board[1].innerHTML = 'X';
        else if (board[1].innerHTML == board[2].innerHTML && board[0].innerHTML == '' && board[1].innerHTML != '')
            board[0].innerHTML = 'X';

        else if (board[3].innerHTML == board[4].innerHTML && board[5].innerHTML == '' && board[3].innerHTML != '')
            board[5].innerHTML = 'X';
        else if (board[3].innerHTML == board[5].innerHTML && board[4].innerHTML == '' && board[3].innerHTML != '')
            board[4].innerHTML = 'X';
        else if (board[4].innerHTML == board[5].innerHTML && board[3].innerHTML == '' && board[4].innerHTML != '')
            board[3].innerHTML = 'X';

        else if (board[6].innerHTML == board[7].innerHTML && board[8].innerHTML == '' && board[6].innerHTML != '')
            board[8].innerHTML = 'X';
        else if (board[6].innerHTML == board[8].innerHTML && board[7].innerHTML == '' && board[6].innerHTML != '')
            board[7].innerHTML = 'X';
        else if (board[7].innerHTML == board[8].innerHTML && board[6].innerHTML == '' && board[7].innerHTML != '')
            board[6].innerHTML = 'X';

        else if (board[0].innerHTML == board[3].innerHTML && board[6].innerHTML == '' && board[0].innerHTML != '')
            board[6].innerHTML = 'X';
        else if (board[0].innerHTML == board[6].innerHTML && board[3].innerHTML == '' && board[0].innerHTML != '')
            board[3].innerHTML = 'X';
        else if (board[3].innerHTML == board[6].innerHTML && board[0].innerHTML == '' && board[3].innerHTML != '')
            board[0].innerHTML = 'X';

        else if (board[1].innerHTML == board[4].innerHTML && board[7].innerHTML == '' && board[1].innerHTML != '')
            board[7].innerHTML = 'X';
        else if (board[1].innerHTML == board[7].innerHTML && board[4].innerHTML == '' && board[1].innerHTML != '')
            board[4].innerHTML = 'X';
        else if (board[4].innerHTML == board[7].innerHTML && board[1].innerHTML == '' && board[4].innerHTML != '')
            board[1].innerHTML = 'X';

        else if (board[2].innerHTML == board[5].innerHTML && board[8].innerHTML == '' && board[2].innerHTML != '')
            board[8].innerHTML = 'X';
        else if (board[2].innerHTML == board[8].innerHTML && board[5].innerHTML == '' && board[2].innerHTML != '')
            board[5].innerHTML = 'X';
        else if (board[5].innerHTML == board[8].innerHTML && board[2].innerHTML == '' && board[5].innerHTML != '')
            board[2].innerHTML = 'X';

        else if (board[0].innerHTML == board[4].innerHTML && board[8].innerHTML == '' && board[0].innerHTML != '')
            board[8].innerHTML = 'X';
        else if (board[0].innerHTML == board[8].innerHTML && board[4].innerHTML == '' && board[0].innerHTML != '')
            board[4].innerHTML = 'X';
        else if (board[4].innerHTML == board[8].innerHTML && board[0].innerHTML == '' && board[4].innerHTML != '')
            board[0].innerHTML = 'X';

        else if (board[2].innerHTML == board[4].innerHTML && board[6].innerHTML == '' && board[2].innerHTML != '')
            board[6].innerHTML = 'X';
        else if (board[2].innerHTML == board[6].innerHTML && board[4].innerHTML == '' && board[2].innerHTML != '')
            board[4].innerHTML = 'X';
        else if (board[4].innerHTML == board[6].innerHTML && board[2].innerHTML == '' && board[4].innerHTML != '')
            board[2].innerHTML = 'X';

        else if (board[4].innerHTML == 'O' && (board[0].innerHTML == '' || board[2].innerHTML == '' || board[6].innerHTML == '' || board[8].innerHTML == '')) {
            for (let j = 0; j <= 8; j++) {
                if (board[j].innerHTML == '') {
                    board[j].innerHTML = 'X';
                    break;
                }
                j++;
            }
        }
        else if (board[0].innerHTML == 'O' || board[2].innerHTML == 'O' || board[6].innerHTML == 'O' || board[8].innerHTML == 'O') {
            if (board[4].innerHTML == '')
                board[4].innerHTML = 'X';
            else
                for (j = 1; j <= 8; j++) {
                    if (board[j].innerHTML == '') {
                        board[j].innerHTML = 'X';
                        break;
                    }
                    j++;
                }
        }
        else {
            for (j = 0; j <= 8; j++) {
                if (board[j].innerHTML == '') {
                    board[j].innerHTML = 'X';
                    break;
                }
                j++;
            }
        }
    }
    checkwinner();
}