let daysLeft = document.querySelector('.daysLeft');
let hoursLeft = document.querySelector('.hoursLeft');
let minsLeft = document.querySelector('.minsLeft');
let secsLeft = document.querySelector('.secLeft');
let finished = document.querySelector('.finished');

let countdownDate = new Date("Mar 2, 2025 11:30:00").getTime();

let x = setInterval(function(){

    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000* 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = hours;
    minsLeft.innerHTML = minutes;
    secsLeft.innerHTML = seconds;

    if(distance < 0)
    {
        clearInterval(x);
        finished.innerHTML = "GIVEAWAY IS OVER🎉";
        daysLeft.innerHTML = "0";
        hoursLeft.innerHTML = "0";
        minsLeft.innerHTML = "0";
        secsLeft.innerHTML = "0";
    }
},1000);


