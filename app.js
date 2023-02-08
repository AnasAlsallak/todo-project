'use strict';
var uname= prompt("Please enter your name:");

while (uname === "" || uname === null) {
    alert("Invalid input please enter a valid name");
    uname= prompt("Please enter your name:");
}

var gender= prompt("Please enter your gender:");
var f;
while (gender !== "male" && gender !== "female" || gender === "") {
    alert("Invalid input please choose male/female");
    gender= prompt("Please enter your gender:");
    f=confirm("Do you want to continue with your input?");
    if(f) {
        break;
    }
}

var age= prompt("Please enter your age:");

while (age <= 0) {
    alert("Invalid input please enter a value greater than zero");
    age= prompt("Please enter your age:");
}

var welcome= confirm("Do you wish to skip the Welcomeing message!?");

if(!welcome){
switch (gender) {
 case "male":
    alert("Welcome Mr "+ uname);
    break;
 case "female":
    alert("Welcome Mrs "+ uname);
    break;
 case false:
    break;
 default:
    alert("Welcome "+ uname);
}
}




