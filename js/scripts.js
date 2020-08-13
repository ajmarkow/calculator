// Businesss logic goes here:

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function subtract(number1, number2) {
  return number1 - number2
}

function divide(number1, number2) {
  return number1 / number2
}
//const resultMulti = multiply(number1, number2);
//alert(resultMulti);

//User interface logic here:
$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseFloat($("#add1").val());
    const number2 = parseFloat($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function (event) {
    event.preventDefault();
    const number1 = parseFloat($("#sub1").val());
    const number2 = parseFloat($("#sub2").val());
    const result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function (event) {
    event.preventDefault();
    const number1 = parseFloat($("#div1").val());
    const number2 = parseFloat($("#div2").val());
    const result = divide(number1, number2);
    $("#output").text(result);
  });
  //user interface for multiplication
  $("form#multiply").submit(function (event) {
    event.preventDefault();
    const number1 = parseFloat($("#mult1").val());
    const number2 = parseFloat($("#mult2").val());
    const result = multiply(number1, number2);
    $("#output").text(result);
  });
});


