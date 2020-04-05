var run = exercise('running');
console.log(run()); 
var swim = exercise('swimming');
console.log(swim()); 

function exercise(activity){
    return function(){
        return (`Today's exercise:  ${activity}`);
    }

}

