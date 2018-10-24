/* exported checkGuessNumber, resetGuessNumber */

var guessNumber = document.getElementById('guess-number');
var guessNumberResponse = document.getElementById('guess-number-response');

var guessCount = 0;

function checkGuessNumber() {

    var elements = guessNumber.elements;
    var guess = elements.number.value;
    var submit = elements.guess;

    if(guess === '7') {
        guessNumberResponse.textContent = 'You got it. You win!';
        submit.disabled = true;
    }
    else {
        guessCount = guessCount + 1;

        if(guessCount < 3) {
            guessNumberResponse.textContent = 'try again!';
        }
        else {
            guessNumberResponse.textContent = 'you lose!';
            submit.disabled = true;
        }
    }
}

function resetGuessNumber() {
    var elements = guessNumber.elements;
    var submit = elements.guess;
    submit.disabled = false;
    guessCount = 0;
    guessNumberResponse.textContent = '';
}