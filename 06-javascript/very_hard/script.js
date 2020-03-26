//variables being prompted
var _numOne ,_operator ,_numTwo ,_answer; 
_numOne = parseInt(prompt("Enter first number here."));
_operator = prompt("Enter operator");
_numTwo = parseInt(prompt("Enter second number here."));
_answer = null;

// Something to test out in the future
// if (_numOne !== null && _numOne !== parseINt(_numOne)){
//     _numONe = parseInt(prompt("The number you entered was incorrect. Please try again"))
// }

switch (_operator) {
    case "+":
        _answer = _numOne + _numTwo;
        console.log(_numOne + " + " + _numTwo + " = " + _answer);
        break;
    case "-":
        _answer = _numOne - _numTwo;
        console.log(_numOne + " - " + _numTwo + " = " + _answer);
        break;
    case "/":
        _answer = _numOne / _numTwo;
        cconsole.log(_numOne + " / " + _numTwo + " = " + _answer);
        break;
    case "*":
        _answer = _numOne * _numTwo;
        console.log(_numOne + " * " + _numTwo + " = " + _answer);
        break;
    default:
        console.log("Redo it");
}