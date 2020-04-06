var Pii= (function(){
    var ssn='1234567';
    return{
        name:"John Doe",
        get ssn(){
            return _ssn;
        },
        set ssn(_silent){
            _ssn = _silent;
        }
    }
  })();
  for(var person in Pii){
      console.log(person);
  }
  console.log(Pii.name)
  Pii.ssn = "SSN not accessible";
  console.log( Pii.ssn);
  // alert(Pii.name);
 