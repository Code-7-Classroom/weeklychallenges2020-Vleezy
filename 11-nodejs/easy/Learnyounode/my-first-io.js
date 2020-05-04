//## MY FIRST I/O! (Exercise 3 of 13) 
var fs = require('fs');
var filename = process.argv[2];

file = fs.readFileSync(filename);
contents = file.toString();
console.log(contents.split('\n').length - 1);