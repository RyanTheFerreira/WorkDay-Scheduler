//code for setting up current time of the day, month and year. 

var today = dayjs();
var time = today.format('H');
console.log(time);
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));

$(document).ready(function() {
  //code for getting current time
  var now = new Date();
  var hour = now.getHours();
  
  //check if the time block is in the past, present, or future and set the background color accordingly
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < hour) {
      $(this).addClass("past").removeClass("present future");
    } else if (blockHour === hour) {
      $(this).addClass("present").removeClass("past future");
    } else {
      $(this).addClass("future").removeClass("past present");
    }
  });

});

$(document).ready(function() {
  // Load saved data from local storage
  $(".description").each(function() {
    var id = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(id));
  });

  // Save data to local storage on button click
  $(".saveBtn").on("click", function() {
    var id = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(id, value);
  });
});