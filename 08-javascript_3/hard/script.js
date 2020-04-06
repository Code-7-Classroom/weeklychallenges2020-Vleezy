// var Pii= (function(){
//     var ssn='1234567';
//     return{
//         name:"John Doe",
//         get ssn(){
//             return _ssn;
//         },
//         set ssn(_x){
//             _ssn = _x;
//         }
//     }
//   })();
  
//   console.log(Pii.name)
//   Pii.ssn = "SSN not accessible";
//   console.log( Pii.ssn);
 

var Pii= (function(){
    var ssn='1234567';
    return{
        name:"John Doe",
        getName(name){
            return getName(name);
        }
    }
  })();
  console.log(Pii.name);
  Pii.ssn = "SSN not accessible";
  console.log(Pii.ssn);