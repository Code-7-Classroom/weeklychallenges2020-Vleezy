var _name = prompt("What's your name? ");

if ( _name == _name.toLowerCase()) {
   document.getElementById("test").innerHTML =( _name + ' you are whispering..');
  console.log( _name + ' you are whispering..');
  } else if ( _name == _name.toUpperCase()) {
    document.getElementById("test").innerHTML =( _name + ' you are SHOUTING!');
    console.log(_name + ' you are SHOUTING!');
} else {
    console.log(_name + ' you are speaking normally');
      document.getElementById("test").innerHTML =( _name + ' you are speaking normally.');
}