window.alert("Choose the number between 1 and 100 in your mind. ");    
var min = 0;
var max = 100;
var middle = 67;

while (true) {
    var answer = prompt("Is your number equal to " + middle );    
    if (answer == 'yes') {
        window.alert("Your number is " + middle);
        break;
    } else {
        answer = prompt("Is your number higher than " + middle );   
        if (answer == 'yes') {
            min = middle;
            middle = Math.round((middle + max) / 2);
        } else {
        max = middle;
        middle = Math.round((middle + min) / 2);
        }
    }

}
