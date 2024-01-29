window.onload = function () {
    colorChange();
    nineAM();
    tenAM();
    elevenAM();
    twelveAM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}

// // Today's date

var today =dayjs()
$("#currentDay").text(today.format('MMM D, YYYY hh:mmA'));

var now = new Date().getHours();

// Color change
$(function colorChange() {
    // 9 am
if (now > 9){
    $("#9am").addClass("past");
}else if (now >= 9 && now < 10 ){
    $("#9am").addClass("present");
}else if (now < 9){
    $("9am").addClass("future");
}


})










