const number1 = parseInt(prompt("Enter a number:"));

let result= convert(number1);
alert(result);

function convert(number1){
  parseFloat(number1);
  
  return number1 * 1.8 +32;
  
}