
//Array
var array = [0,1,2,3,4,5,6,7];
console.log(`Original Array:`, array);

//Splicing to Change Array
var remove = array.splice(0,3, 4,5,6,7);
console.log(`Splice:`, remove)
var remove2 = array.splice(4,5, 0,1,2);
console.log(`Splice:`, remove2);
console.log(`New Array:`,array);

//IndexOf()
var index = array.indexOf(3);
console.log(`Index of 3: ${index}`);
}

//Function
function search(array){
    return array.indexOf(array);
}
