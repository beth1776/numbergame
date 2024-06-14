// guess my number

// choose number without revealing
// user input first guess into textbox
// program then would tell whether number is higher or lower
// repeat
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let number=getRndInteger(1, 100) //declaration
function userguess(wholenumber) { //function
    //if userguess is lower than random then output "lower"
    if (wholenumber > number) {console.log ("lower")}
    //if userguess is higher than random then output "higher"
    if (wholenumber < number) {console.log ("higher")}
    //if userguess is same as random, then output "correct"
    if (wholenumber == number) {console.log ("bitch")}
}

/////////////////

// data

let numbervar = 0;
let othernumber = 0.5;
let text = "hi bitch";
let arr = ["hi","bitch"];