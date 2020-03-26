// Easy__Javascript--2 

var _fnames, _lnames, age;
_fnames = ['Bob', 'John', 'Bill']; 
_lnames = ['Rin', 'Doe', 'Woods']; 
age = ['17', '18', '19']; 
var _answer = (_fnames, _lnames, age) => `Hello my name is ${_fnames} ${_lnames} and I'm ${age} years old.` ;

console.log(
  _answer(_fnames[1], _lnames[1], age[2]));