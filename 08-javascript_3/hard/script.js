
function Pii() {
    var name = 'John Doe';
    var ssn = 123456
    function getName() {
      alert(name);
    }
    return getName;
  }
  
  var person = Pii();
  person();