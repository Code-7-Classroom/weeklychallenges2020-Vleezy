var _number1, _number2;
_number1 = prompt("Enter first number.");
_number2 = prompt("Enter first number.");

function minimum(){
    var _answer = Math.min(_number1, _number2);
    console.log(_answer);

document.getElementById("test").innerHTML =( _answer);
}
minimum();
