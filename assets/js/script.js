
// // Color change depending on time of day

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


    // 12 am
    if (now > 24) {
        $("#12am").addClass("past");
    } else if (now >= 24 && now < 1) {
        $("#12am").addClass("present");
    } else if (now < 24) {
        $("9am").addClass("future");
        // check above and see if 9am does anything 
    }
})

// // Next functions will be for the save button working to save the input from user to local storage. 


// // Display today's day and date
var today = dayjs()
$("#currentDay").text(today.format('dddd, MMM D, YYYY hh:mmA'));



$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })



    // Get item from local storage if any

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-24 .description").val(localStorage.getItem("hour-24"));

    timeTracker();
})