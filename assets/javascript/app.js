$(document).ready(function(){
  $(".again").hide();
  $(".questionContainer").hide();
  $(".next").hide();
  $(".scoreDisplay").hide();
});

//Start function, unhide questions, other buttons
$(".startGame").click(function() {
  $(".questionContainer").show();
  $(".next").show();
  $(".scoreDisplay").show();
});

//Total number of questions
var totalNumQuestions = $('.question').size();

//Display current question, sets it at first question
var currentQuestion = 0;

//jQuery variable
$question = $('.question');

//Hide all of the questions
$question.hide();

//Show the first question
$($question.get(currentQuestion)).fadeIn();

//Click listener to get next question...
$('.next').click(function() {

//Current question disappears...
  $($question.get(currentQuestion)).fadeOut(function() {

//Questions go up one by one
    currentQuestion = currentQuestion + 1;

//Next question...
    $($question.get(currentQuestion)).fadeIn();

  });

});

//Scoring function
function setScore() {
  var score = $('input:checked[value=correct]').length
  $('#score').text(score);
}

//Set score on input change (as user selects the correct answer)...
$('input').change(setScore);

//Set score when initialized...
setScore();