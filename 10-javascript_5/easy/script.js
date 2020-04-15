
const numbers = [11,2,8,49,25,6]; 

const largestNumber = (values) => {
    let highest = 0; //local variable

        //for loop
    for (let i=0; i<values.length; i+=1) {
        if (values[i] > highest){
            highest = values[i];
        }
    }
    return highest;
}

console.log(largestNumber(numbers));


/*
//Simpler 

const numbers = [1,2,3];
//ES6 spread operator "..."
console.log(Math.max(...numbers));

*/