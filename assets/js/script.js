
// // Color change depending on time of day

$(function colorChange() {
    var now = new Date().getHours();
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
        $("#5pm").addClass("present");
    } else if (now < 17) {
        $("5pm").addClass("future");

    }

    // 12 am
    if (now >= 0 && now < 1) {
        $("#12am").addClass("present");
    } else if (now < 24) {
        $("#12am").addClass("future");
    }
});



// // Next functions will be for the save button working to save the input from user to local storage. Including the date and time for the page. 


// // Display today's day and date
var today = dayjs()
$("#currentDay").text(today.format('dddd, MMM D, YYYY hh:mmA'));

// This will have the time update while the user is still on the page
function updateDateTime() {
    var today = dayjs()
    $("#currentDay").text(today.format('dddd, MMM D, YYYY hh:mmA'));
}
// Set to update every 30 seconds since 60 seconds is too late
setInterval(updateDateTime, 30000);
updateDateTime();

// Save button

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })



    // Get item from local storage if any for input

    for (var i = 9; i <= 17; i++) {
        $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
    }
    $("#hour-24 .description").val(localStorage.getItem("hour-24"));

    timeTracker();
})