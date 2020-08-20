

var score, roundScore, activePlayer,  dice = 0, gamePlaying, prev_dice = 0, finalScore = 100,dice_sum=0;
init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        dice = Math.floor(Math.random() * 6) + 1;


        if (prev_dice === 6 && dice === 6) {
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else {
            prev_dice = dice;
        }
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'photos/dice-' + dice + '.png';


        if (dice !== 1 ) {
            // roundScore += dice;
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];


        if (score[activePlayer] >= finalScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;


        } else {
            nextPlayer();
        }

    }


});

function nextPlayer() {

    document.getElementById('current-' + activePlayer).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0];
    gamePlaying = true;
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('name-0').textContent = 'Player 1';
    document.querySelector('.dice').style.display = 'none'; //Using Query Selector in Modifying Css
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}


function modifyScore() {
    var x, text;

    x = document.getElementById('input').value;

    if (isNaN(x) || x < 1) {
        alert('Input not valid');
        document.getElementById('input').value = finalScore;

    } else {
        finalScore = x;
        document.querySelector('.input').style.display = 'none';
    }

}
