// STYLE PREVIEWER
$("#text").change(updateText);
$("#fontSize").change(updateFontSize);
$("#fontFamily").change(updateFontFamily);
$("#bgColor").change(updateBgColor);
$("#textColor").change(updateTextColor);
$("#bold").change(updateBold);
$("#italic").change(updateItalic);
$("input[name='align']").change(updateAlign);
$("#copyPaste").click(updateCopyPaste);

//EVENT FUNCTION
function updateText() {
  let newText = $("#text").val();
  $("#preview").html(newText);
}

function updateFontSize() {
  let newFontSize = Number($("#fontSize").val());
  $("#preview").css("font-size", newFontSize + "px")
}

function updateFontFamily() {
  let newFontFamily = $("#fontFamily").val();
  $("#preview").css("font-family", newFontFamily);
}

function updateBgColor() {
  let newBgColor = $("#bgColor").val();
  $("#preview").css("background-color", newBgColor);
}

function updateTextColor() {
  let newTextColor = $("#textColor").val();
  $("#preview").css("color", newTextColor);
}

function updateBold() {
  let checked = $("#bold").prop("checked");
  if (checked) {
    $("#preview").css("font-weight", "bold");
    $("#bold").val("bold");
  } else {
    $("#preview").css("font-weight", "normal");
    $("#bold").val("normal");
  }
}

function updateItalic() {
  let checked = $("#italic").prop("checked");
  if (checked) {
    $("#preview").css("font-style", "italic");
    $("#italic").val("italic");
  } else {
    $("#preview").css("font-style", "normal");
    $("#italic").val("normal");
  }
}

function updateAlign() {
  let alignValue = $("input[name='align']:checked").val();
  $("#preview").css("text-align", alignValue);
}

function updateCopyPaste() {
  let text = $("#text").val();
  let fontSize = $("#fontSize").val();
  let fontFamily = $("#fontFamily").val();
  let bgColor = $("#bgColor").val();
  let textColor = $("#textColor").val();
  let bold = $("#bold").val();
  let italic = $("#italic").val();
  let align = $("input[name='align']:checked").val();
  
  $("#copyPasteFinal").html("(html) text: " + text + "<br>" + "font-size: " + fontSize + "px;" + "<br>" + "font-family: " + fontFamily + "<br>" + "background-color: " + bgColor + "<br>" + "color: " + textColor + "<br>" + "font-weight: " + bold + "<br>" + "font-style: " + italic + "<br>" + "text-align: " + align); 
}
