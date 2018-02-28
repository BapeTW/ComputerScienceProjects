// STYLE PREVIEWER
$("#text").change(updateText);
$("#fontSize").change(updateFontSize);

//EVENT FUNCTION
function updateText() {
  let newText = $("#text").val();
  $("#preview").html(newText);
}

function updateFontSize() {
  let newFontSize = Number($("#fontSize").val());
  $("#preview").css("font-size", newFontSize + "px")
}