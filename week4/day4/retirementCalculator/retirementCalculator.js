var currentAge = 0;
var retireAge = 0;
var currentYear = 0
var duration = 0
var retireYear = 0

currentAge = Number(prompt("What is your age? e.g. 30"))
while(!(Number.isInteger(currentAge)) || currentAge > 150 || currentAge < 1){
    currentAge = Number(prompt("Your age should be between 1 and 150. What is your age? e.g. 30"));
}

retireAge = Number(prompt("At what age would you like to retire? e.g. 50"));
while (!(Number.isInteger(retireAge)) || retireAge > 150 || retireAge < 1 || retireAge < currentAge) {
    if (!(Number.isInteger(retireAge))){
        retireAge = Number(prompt("Your retirement age should be integer. At what age would you like to retire? e.g. 50"));
    } else if (retireAge > 150 || retireAge < 1) {
        retireAge = Number(prompt("Your retirement age should be between 1 and 150. At what age would you like to retire? e.g. 50"));
    } else {
    retireAge = Number(prompt("The retirement age should be greater than or equal to your current age.  At what age would you like to retire? e.g. 50"));
    } 
}

currentYear = new Date().getFullYear();
duration = retireAge - currentAge
retireYear = currentYear + duration

document.write("You have " + duration + " years left until you can retire. <br>")
document.write("It's " + currentYear + ", so you can retire in " + retireYear + ".")