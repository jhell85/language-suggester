$(document).ready(function() {
  $("#startQuiz").click(function() {
    $("#startContainer").addClass("none")
    $("#question1").removeClass("none")
  })
  var python = 0;
  var java = 0;
  var c = 0;
  

  $("#q1o1").click(function () {
    $("#question1").addClass("none")
    java += 1
    $("#question2").removeClass("none")
  })
  $("#q1o2").click(function () {
    $("#question1").addClass("none")
    c += 1
    $("#question2").removeClass("none")
  })
  $("#q1o3").click(function () {
    $("#question1").addClass("none")
    python += 1
    $("#question2").removeClass("none")
    console.log(python, c, java)
  })

  $("#q2o1").click(function () {
    $("#question2").addClass("none")
    python = 1
    $("#question3").removeClass("none")
  })
  $("#q2o2").click(function () {
    $("#question2").addClass("none")
    java = 1
    $("#question3").removeClass("none")
  })
  $("#q2o3").click(function () {
    $("#question2").addClass("none")
    c = 1
    $("#question3").removeClass("none")
    console.log(python, c, java)
  })
  
  $("#q3o1").click(function () {
    $("#question3").addClass("none")
    c += 1
    $("#question4").removeClass("none")
  })
  $("#q3o2").click(function () {
    $("#question3").addClass("none")
    python += 1
    $("#question4").removeClass("none")
  })
  $("#q3o3").click(function () {
    $("#question3").addClass("none")
    java += 1
    $("#question4").removeClass("none")
  })

  $("#q4o1").click(function () {
    $("#question4").addClass("none")
    c += 1
    $("#question5").removeClass("none")
  })
  $("#q4o2").click(function () {
    $("#question4").addClass("none")
    python += 1
    $("#question5").removeClass("none")
  })
  $("#q4o3").click(function () {
    $("#question4").addClass("none")
    java += 1
    $("#question5").removeClass("none")
  })

  $("#q5o1").click(function () {
    $("#question5").addClass("none")
    c += 1
    console.log(python, c, java)
  })
  $("#q5o2").click(function () {
    $("#question5").addClass("none")
    python += 1
    console.log(python, c, java)
  })
  $("#q5o3").click(function () {
    $("#question5").addClass("none")
    java += 1
    console.log(python, c, java)
  })

})