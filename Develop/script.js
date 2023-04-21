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
      $(this).addClass("past");
    } else if (blockHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

});

//get all the save buttons
var saveButton = $("#saveBtn");

saveButton.click(function(){
  var description = $(this).siblings(".description").val();
  
  var hour = $(this).parent().attr("id");

  localStorage.setItem(hour, description);
}
);

//code for saving input from LocalStorage
$(".description").each(function()
{
  var key = $(this).parent().attr("id");

  var value = localStorage.getItem(key);

  if (value !== null) {
    $(this).val(value);
  }
})
 
