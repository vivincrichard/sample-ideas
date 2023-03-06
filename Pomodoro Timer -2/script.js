// alert message

alert("Welcome to POMODORO TIMER Webpage"); 
alert("Click OK to Start");


// Declare variables:

var start = document.getElementById("start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");

var wm = document.getElementById("work_mins");
var ws = document.getElementById("work_second");

var bm = document.getElementById("break_mins");
var bs = document.getElementById("break_second");

//


var startTimer;

start.addEventListener("click",function() {
    if(startTimer === undefined){
        startTimer = setInterval(timer,1000)
    } else {
        alert("Timer is already running");
    }
})


reset.addEventListener("click",function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText = 0; 
    pauseInterval()
    startTimer = undefined;
})
 

pause.addEventListener("click",function(){
    pauseInterval()
    startTimer = undefined;
})







function timer() {
    // work function
    if(ws.innerText !=0){
        ws.innerText--;
    } else if(wm.innerText !=0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    // break function 
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    // cycle function
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById("counter").innerHTML++;
    }
}


// pause function 

function pauseInterval(){
    clearInterval(startTimer);
}