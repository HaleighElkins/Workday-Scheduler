// I used window.onload to execute scripts that need to access the DOM when page is fully loaded. 

// window.onload = function () {
//     colorChange();
//     nineAM();
//     tenAM();
//     elevenAM();
//     twelveAM();
//     onePM();
//     twoPM();
//     threePM();
//     fourPM();
//     fivePM();
// }

// What do the above do for me?

// // Today's date

var today = dayjs()
$("#currentDay").text(today.format('dddd, MMM D, YYYY hh:mmA'));

var now = new Date().getHours();

// Color change depending on time of day

$(function colorChange() {

    // 9 am
    if (now > 9) {
        $("#9am").addClass("past");
    } else if (now >= 9 && now < 10) {
        $("#9am").addClass("present");
    } else if (now < 9) {
        $("9am").addClass("future");
    }

    // 10am
    if (now > 10) {
        $("#10am").addClass("past");
    } else if (now >= 10 && now < 11) {
        $("#10am").addClass("present");
    } else if (now < 10) {
        $("10am").addClass("future");
    }

    // 11am
    if (now > 11) {
        $("#11am").addClass("past");
    } else if (now >= 11 && now < 12) {
        $("#11am").addClass("present");
    } else if (now < 11) {
        $("11am").addClass("future");
    }

    // 12pm
    if (now > 12) {
        $("#12pm").addClass("past");
    } else if (now >= 12 && now < 13) {
        $("#12pm").addClass("present");
    } else if (now < 12) {
        $("12pm").addClass("future");
    }

    // 1pm
    if (now > 13) {
        $("1pm").addClass("past");
    } else if (now >= 13 && now < 14) {
        $("#1pm").addClass("present");
    } else if (now < 13) {
        $("1pm").addClass("future");
    }

    // 2pm
    if (now > 14) {
        $("#2pm").addClass("past");
    } else if (now >= 14 && now < 15) {
        $("#2pm").addClass("present");
    } else if (now < 14) {
        $("2pm").addClass("future");
    }

    // 3pm
    if (now > 15) {
        $("#3pm").addClass("past");
    } else if (now >= 15 && now < 16) {
        $("#3pm").addClass("present");
    } else if (now < 15) {
        $("3pm").addClass("future");
    }

    // 4pm
    if (now > 16) {
        $("#4pm").addClass("past");
    } else if (now >= 16 && now < 17) {
        $("#4pm").addClass("present");
    } else if (now < 16) {
        $("4pm").addClass("future");
    }

    // 5pm 
    if (now > 17) {
        $("#5pm").addClass("past");
    } else if (now >= 17 && now < 18) {
        $("#9am").addClass("present");
    } else if (now < 17) {
        $("9am").addClass("future");
        // check above and see if 9am does anything 
    }




































})










