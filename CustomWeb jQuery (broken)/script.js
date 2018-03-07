//FUNCTIONS
$("#orangeJuiceBG").click(function () {
  $("#removeOrange").remove();
  $("#orangeInfo, #orangeH3").css("visibility", "visible");
  $("#orangeJuiceBG").css("height", "630px");
  $("#orangeInfo, #orangeH3").css("line-height", "25px");
  $("#orangeInfo").css("font-size", "15.25px");
});

$("#appleJuiceBG").click(function () {
  $("#removeApple").remove();
  $("#appleInfo, #appleBG").css("visibility", "visible");
  $("#appleJuiceBG").css("height", "630px");
});

$("#appleJuiceBG").click(outputAppleText);
$("#otherJuiceBG").click(outputOtherText);

        