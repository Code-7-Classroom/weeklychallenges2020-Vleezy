//function constructor

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
  
  Person.prototype.programmer='Javascript';
  
  var yulie = new Person("Yulie", "Lawyer", 20);
  var vlad = new Person("Vlad", "Producer", 25);
  var jill = new Person("Jill", "Writer", 23);
  
  yulie.fetchJob();
  vlad.fetchJob();
  jill.fetchJob();
  
  yulie.run();
  vlad.run();
  jill.run();
  
  console.log(yulie.programmer);
  console.log(vlad.programmer);
  console.log(jill.programmer);
  
  //4
  
   function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
          this.languages = languages;
          this.busy = true;
      };
  
      Programmer.prototype.completeTask =
  function(){
    this.busy = false;
  };
  
   Programmer.prototype.acceptNewTask =
  function(){
    this.busy = true;
  };
  
  Programmer.prototype.offerNewTask =
  function(){
  if (this.busy == true){
    console.log(`${this.name} is busy at the moment.`);
  }else{
    console.log(`${this.name} is available at the moment.`);
  }
  };
  
  Programmer.prototype.listLanguage = function(){
      console.log(this.languages)
  }
  
  Programmer.prototype.learnLanguage = function(learn){
      this.languages.push(learn);
  }
  
  var mark = new Programmer("Mark","programmer", 20, ["HTML", "CSS"], true );
  
  console.log(mark);
  mark.learnLanguage('JS');
  console.log(mark);
  console.log(mark.offerNewTask());

