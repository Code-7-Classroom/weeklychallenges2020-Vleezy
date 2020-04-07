//function constructor
var yulie = {
    name: "Yulie",
    job: 'Lawyer',
    age: 20
  };
  
  var Person = function(name,job, age){
    this.name = name;
    this.job = job;
    this.age = age;
  }
  
  Person.prototype.run = 
  function(){
      console.log(`${this.name}: Running is fun said no one ever!`);
  };
  
  Person.prototype.fetchJob =
  function(){
    console.log(`${this.name} is a ${this.job}.`)
  };
  
  Person.prototype.languages='English';
  
  var yulie = new Person("Yulie", "Lawyer", 20);
  var vlad = new Person("Vlad", "Producer", 25);
  var jill = new Person("Jill", "Writer", 23);
  
  yulie.fetchJob();
  vlad.fetchJob();
  jill.fetchJob();
  
  yulie.run();
  vlad.run();
  jill.run();
  
  console.log(yulie.languages);
  console.log(vlad.languages);
  console.log(jill.languages);