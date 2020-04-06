var Pii= (function(ssn, name){
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
  
  console.log(Pii.name)
  Pii.ssn = "SSN not accessible";
  alert( Pii.ssn);
 