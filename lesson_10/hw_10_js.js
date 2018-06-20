import './hw_10_js.scss';

$('.btn_red').click(makeRed);

function makeRed() {
    clearLights();
    $('.btn_red').css('background-color', 'red');
}

$('.btn_yellow').click(makeYellow);

function makeYellow() {
    clearLights();
    $('.btn_yellow').css('background-color', 'yellow');
}

$('.btn_green').click(makeGreen);

function makeGreen() {
    clearLights();
    $('.btn_green').css('background-color', 'green');
}

// Clear all bulbs
function clearLights() {
    $('.bulb').css('background-color', 'grey');
}