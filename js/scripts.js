// Businesss logic goes here:

function add(number1, number2) {
  parseInt(number1);
  parseInt(number2);
  return number1 + number2;
}

function multiply(number1, number2) {

  return number1 * number2;
}

function subtract(number1, number2) {
  parseInt(number1);
  parseInt(number2);
  return number1 - number2
}

function divide(number1, number2) {
  parseInt(number1);
  parseInt(number2);
  return number1 / number2
}
//const resultMulti = multiply(number1, number2);
//alert(resultMulti);

//User interface logic here:
$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});


