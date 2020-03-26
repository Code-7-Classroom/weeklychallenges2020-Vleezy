//arrays
var month, number, ans, response;
month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; 
ans = null;
response= "Choose a number 1-12";

//prompt
number = parseInt(prompt('Enter number.'));

 // switch;
switch (number) {
    case 1:
        ans = month[0];
        console.log(ans)
        break;
    case 2:
        ans = month[1];
        console.log(ans)
        break;
    case 3:
        ans = month[2];
        console.log(ans)
        break;
    case 4:
        ans = month[3];
        console.log(ans)
        break;
    case 5:
        ans = month[4];
        console.log(ans)
        break;
    case 6:
        ans = month[5];
        console.log(ans)
        break; 
    case 7:
        ans = month[6];
        console.log(ans)
        break;
    case 8:
        ans = month[7];
        console.log(ans)
        break;
    case 9:
        ans = month[8];
        console.log(ans)
        break;
    case 10:
        ans = month[9];
        console.log(ans)
        break;
    case 11:
        ans = month[10];
        console.log(ans)
        break;
    case 12:
        ans = month[11];
        console.log(ans)
        break;  
    default:
        alert(response); //alert
}
