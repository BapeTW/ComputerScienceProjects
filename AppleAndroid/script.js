$("#android").click(chooseAndroid);
$("#apple").click(chooseApple);


function chooseAndroid() {
  $("h1").html("I Love Android");
  $("img").attr("src", "images/andy-lg.png");
  $("a").attr("href", "https://www.android.com/");
}

function chooseApple() {
  $("h1").html("I Love Apple");
  $("img").attr("src", "images/og.png");
  $("a").attr("href", "https://www.apple.com/");
}