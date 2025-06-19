let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
const date = new Date(time);
const hours = date.getUTCHours().toString().padStart(1,'0');
const minutes = date.getUTCMinutes().toString().padStart(1, '0');
const seconds = date.getUTCSeconds().toString().padStart(1, '0');
const milliseconds = Math.floor(date.getUTCMilliseconds() / 100)
.toString()
.padStart(1, '0');

return `${hours}:${minutes}:${seconds}:${milliseconds}`
}

function start() {
startTime = Date.now() - elapsedTime;
timerInterval = setInterval(() => {
elapsedTime = Date.now() - startTime;
document.getElementById('watch').textContent = timeToString(elapsedTime);
}, 100);
}

function stop() {
clearInterval(timerInterval);
}

function reset() {
clearInterval(timerInterval);
document.getElementById('watch').textContent = '0:0:0:0';
elapsedTime = 0;
}

document.getElementById('start').addEventListener('click', start);
$(function(){
    $('#start').click(function(){
        $(this).prop('disabled',true);
        $(this).addClass("add_push");
        $('#stop').removeClass("add_push");
        $('#stop').prop('disabled',false)
        $('#reset').prop('disabled',false);
        $('#reset').removeClass("add_push");
    });
});

document.getElementById('stop').addEventListener('click', stop);
$(function(){
    $('#stop').click(function(){
        $(this).prop('disabled',true);
        $(this).addClass("add_push");
        $('#start').prop('disabled',false);
        $('#start').removeClass("add_push");
    });
});

document.getElementById('reset').addEventListener('click', reset);
$(function(){
    $('#reset').click(function(){
        $(this).prop('disabled',true);
        $(this).addClass("add_push");
        $('#stop').prop('disabled',true);
        $('#stop').addClass("add_push");
        $('#start').prop('disabled',false);
        $('#start').removeClass("add_push");
    });
});