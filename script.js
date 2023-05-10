let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let msec = 00;
timer = false;

startBtn.addEventListener('click', function(){
    if(timer == true){
        alert('Timer is already running');
    }
    else{
        timer = true;
        stopWatch();
    }
});

stopBtn.addEventListener('click', function(){
    timer = false;
});

resetBtn.addEventListener('click', function(){
    timer = false;
    hour = 00;
    minute = 00;
    second = 00;
    msec = 00;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('msec').innerHTML = '00';
});


function stopWatch(){
    if (timer){
        msec++;

        if (msec == 100){
            second++;
            msec = 0;
        }

        if (second == 60){
            minute++;
            second = 0;
        }

        if (minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }

        let hrStr = hour;
        let minStr = minute;
        let secStr = second;
        let msecStr = msec;

        document.getElementById('hr').innerHTML = hrStr;
        document.getElementById('min').innerHTML = minStr;
        document.getElementById('sec').innerHTML = secStr;
        document.getElementById('msec').innerHTML = msecStr;

        setTimeout(stopWatch, 10);
    }
}