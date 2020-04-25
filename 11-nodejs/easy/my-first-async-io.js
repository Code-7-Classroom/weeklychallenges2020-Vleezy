//## MY FIRST ASYNC I/O! (Exercise 4 of 13)  
var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});