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

  $("#q2o1").click(function () {
    $("#question2").addClass("none")
    q2 = "Python"
    $("#question3").removeClass("none")
  })
  $("#q2o2").click(function () {
    $("#question2").addClass("none")
    q2 = "JavaScript"
    $("#question3").removeClass("none")
  })
  $("#q2o3").click(function () {
    $("#question2").addClass("none")
    q2 = "C#"
    $("#question3").removeClass("none")
  })
  
  $("#q3o1").click(function () {
    $("#question3").addClass("none")
    q3 = "C#"
    $("#question4").removeClass("none")
  })
  $("#q3o2").click(function () {
    $("#question3").addClass("none")
    q3 = "Python"
    $("#question4").removeClass("none")
  })
  $("#q3o3").click(function () {
    $("#question3").addClass("none")
    q3 = "JavaScript"
    $("#question4").removeClass("none")
  })

  $("#q4o1").click(function () {
    $("#question4").addClass("none")
    q2 = "C#"
    $("#question5").removeClass("none")
  })
  $("#q4o2").click(function () {
    $("#question4").addClass("none")
    q2 = "Python"
    $("#question5").removeClass("none")
  })
  $("#q4o3").click(function () {
    $("#question4").addClass("none")
    q2 = "JavaScript"
    $("#question5").removeClass("none")
  })


})