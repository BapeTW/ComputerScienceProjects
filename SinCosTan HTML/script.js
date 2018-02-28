//Simple Calculator Program

//Event Listener
$("#calc").click(calculate);

//Event Functions
function calculate() {
  //Input
  let num1 = Number($("#num1").val());
  let num2 = Number($("#num2").val());
  console.log(num1 + " and " + num2);
  //Process
  let sum = Math.asin(num1 / num2);

  console.log("sum " + sum);
  //Output
  $("#sum").html(sum);
}
