$(document).ready(function() {
  $("#startQuiz").click(function() {
    $("#startContainer").addClass("none")
    $("#question1").removeClass("none")
  })
  var q1;
  var q2;
  var q3;
  var q4;
  var q5;

  $("#q1o1").click(function () {
    $("#question1").addClass("none")
    q1 = "JavaScript"
    $("#question2").removeClass("none")
  })
  $("#q1o2").click(function () {
    $("#question1").addClass("none")
    q1 = "C#"
    $("#question2").removeClass("none")
  })
  $("#q1o3").click(function () {
    $("#question1").addClass("none")
    q1 = "Python"
    $("#question2").removeClass("none")
  })
 


})