// You got this! 💫


const logEl = document.getElementById("log");
const workBtn = document.getElementById("work-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const timeDisplay = document.getElementById("time-display");
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const contBtn = document.getElementById("continue-btn")

let timeStart = 0;
let timer;
let time;
let run = false;



// console.log(dateFormat);
// 💻 Work: 25 mins
workBtn.addEventListener("click", () => {
    clearInterval(timer);
    let date = new Date();
    let dateFormat = date.toLocaleString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    timeStart = 25;
    time = timeStart * 60;
    run = true;
    timer = setInterval(update, 1000);
    logEl.innerHTML += `<h4>Work ,</h4> ${dateFormat}</br>`
});

// ☕️ Short break: 5 mins
shortBreakBtn.addEventListener("click", () => {
    clearInterval(timer);
    let date = new Date();
    let dateFormat = date.toLocaleString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    timeStart = 5;
    time = timeStart * 60;
    run = true;
    timer = setInterval(update, 1000);
    logEl.innerHTML += `<h4>Short Break ,</h4> ${dateFormat}</br>`
});

// 🌯 Long break: 15 mins
longBreakBtn.addEventListener("click", () => {
    clearInterval(timer);
    let date = new Date();
    let dateFormat = date.toLocaleString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    timeStart = 15;
    time = timeStart * 60;
    run = true;
    timer = setInterval(update, 1000);
    logEl.innerHTML += `<h4>Long Break ,</h4> ${dateFormat}</br>`    
});


function update() {
    if (!run) return;
    const min = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timeDisplay.innerHTML = `${min}:${seconds}`;
    if (time === 0) {
        clearInterval(timer);
        run = false;
    } else {
        time--;
    }
}

pauseBtn.addEventListener('click',() => {
    clearInterval(timer);
})


contBtn.addEventListener('click',() => {
    clearInterval(timer);
    timer = setInterval(update, 1000);
})
stopBtn.addEventListener('click',() => {
    clearInterval(timer);
    timeDisplay.innerHTML = `0:00`;
    console.log(time)
})