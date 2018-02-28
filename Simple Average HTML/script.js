//Simple Calculator Program

//Event Listener
$("#calc").click(calculate);

//Event Functions
function calculate() {
  //Input
  let num1 = Number($("#num1").val());
  let num2 = Number($("#num2").val());
  let num3 = Number($("#num3").val());
  console.log(num1 + " and " + num2 + " and " + num3);
  //Process
  let sum = (num1 + num2 + num3) / 3;

  console.log("sum " + sum);
  //Output
  $("#sum").html(sum);
}
