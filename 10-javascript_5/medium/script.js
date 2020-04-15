
// Sums up the array
const array = [1,2,3,4,5,6,7,8,9];

const sum = (arr) => {
let x = 0;

for(let i=0; i < arr.length; i++){
  x = x + arr[i];
  console.log(x);
}
}

sum(array);