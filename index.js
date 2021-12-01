//Function to calculate days, hours, minutes and seconds until Christmas
function calculateChristmasCountdown() {

    //Get today's date
    let today = new Date();

    //Get the current month (+1 as January is 0)
    let currentMonth = today.getMonth() + 1;

    //Get the current day of the month
    let currentDay = today.getDate();

    //Get the year when the next Christmas day will occur on
    let nextChristmasYear = today.getFullYear();

    //if the Christmas has passsed, but it's still this year's December
    if (currentMonth == 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }

    let christmasDay = new Date("December 25, 2021 00:00");

    //Get the difference in seconds between the two days
    let diffSeconds = Math.floor((christmasDay.getTime() - today.getTime()) / 1000);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    //Don't calculate the time left if it is Christmas day.
    if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
        //Convert these seconds into days, hours, minutes, seconds
        days = Math.floor(diffSeconds / (3600 * 24));
        diffSeconds -= days * 3600 * 24;
        hours = Math.floor(diffSeconds / 3600);
        diffSeconds -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds -= minutes * 60;
        seconds = diffSeconds;
    }

    //Add our counts to their corresponding HTML elements.
    document.getElementById("cr_days").innerHTML = days;
    document.getElementById("cr_hours").innerHTML = hours;
    document.getElementById("cr_minutes").innerHTML = minutes;
    document.getElementById("cr_seconds").innerHTML = seconds;

    //Recursive call after 1 second using setTimeout
    setTimeout(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();


//Function to calculate days, hours, minutes and seconds until New Year
function calculateNewYearCountdown() {

    //Get today's date
    let today = new Date();

    let newYearDay = new Date("January 01, 2022 00:00");

    //Get the difference in seconds between the two days
    let diffSeconds = Math.floor((newYearDay.getTime() - today.getTime()) / 1000);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    //Convert these seconds into days, hours, minutes, seconds
    days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds;


    //Add our counts to their corresponding HTML elements.
    document.getElementById("ny_days").innerHTML = days;
    document.getElementById("ny_hours").innerHTML = hours;
    document.getElementById("ny_minutes").innerHTML = minutes;
    document.getElementById("ny_seconds").innerHTML = seconds;

    //Recursive call after 1 second using setTimeout
    setTimeout(calculateNewYearCountdown, 1000);
}

calculateNewYearCountdown();

let bgs = ["video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4", "video1.mp4"];
index = 0;

let button = document.getElementById("button");
button.onclick = switch_bgs;

function switch_bgs() {
    document.getElementById("bg-video").removeAttribute("src");
    document.getElementById("bg-video").setAttribute("src", `${bgs[index]}`);
    index = (index + 1) % bgs.length;
};
