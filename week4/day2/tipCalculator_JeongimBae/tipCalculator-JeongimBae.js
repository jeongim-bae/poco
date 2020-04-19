var billAmount = 0;
var tipRate = 0;
var tipAmount = 0;
var totalAmount = 0;

billAmount = Number(prompt("Please enter the bill amount. e.g 200"));
tipRate = Number(prompt("Please enter the tip rate. e.g. 15"));

tipAmount = billAmount * tipRate / 100;
totalAmount = billAmount + tipAmount;

document.write("Your bill amount is Fr." + billAmount + "<br>");
document.write("Your tip rate is " + tipRate + "% <br><br>");
document.write("Your tip is Fr." + tipAmount + "<br>");
document.write("Your total bill amount is Fr." + totalAmount); 
