// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {})
if (12 < 13) {
console.log(true);
}

if (15 < 13) {
console.log(true);
} // condition is false that why if statement not run

if (!12) {
console.log("number");
}
// if-else Statement
if (12 < 13) {
console.log(true);
} else {
console.log(false);
}

if (15 < 13) {
console.log(true);
} // condition is false that ehy is statement not run 
else {
console.log(false);
}

if (!12) {
console.log("number");
} else {
console.log("not anumber");
}

// if-else if-else Statements
/*
if (condition) {
}   else if (condition) {
}   else()
*/
/*
if (loggedin && admin) {
    console.log("Welcome Admin");
}   else if (loggedin) {
    console.log("Welcome User");
}   else {
    console.log("go to login page");
}
*/

// Switch case Statement
switch ('First50') { // value --> Case value sthe match karshe
    case 'First50':
        console.log("First 50")    
        break;
    case 'Bogo':
        console.log("Buy one get one free")    
        break;
    case 'BlackFriday':
        console.log("It's Black Friday sale - get 30% off")    
        break;
    default:
        console.log("offer not valid")
        break;
}

switch ('Day1') { // value --> Case value sthe match karshe
    case 'Day1':
        console.log("Mondday offer - First 50")    
        break;
    case 'Day2':
        console.log("Tuesday offer - Buy one get one free")    
        break;
    case 'Day3':
        console.log("Wednesday offer - Black Friday sale - get 30% off")    
        break;
    case 'Day4':
        console.log("Thursday offer - flat 20% off")    
        break;
    case 'Day5':
        console.log("Friday offer - First 100")    
        break;
    case 'Day6':
        console.log("Saturday offer - Buy 2 get 1 free")    
        break;
    case 'Day7':
        console.log("Sunday offer - flat 10% off")    
        break;
    default:
        console.log("offer not valid")
        break;
}

// Early Return Pattern
function score(value) {
    if (value >90) {
        return "Value is more than 90";
    } else if (value < 80 ){
        return "Value is more than 80";
    } else if (value < 70 ){
        return "Value is more than 70";
    } else if (value < 60 ){
        return "Value is more than 60";
    } else {
        return "value is less than 60";
    }  
} 
score(100);
// console.log(score(100))

function score1(value) {
    if (value > 90) return "value is More Than 90";
    else if (value > 80) return "value is More Than 70";
    else if (value > 70) return "value is More Than 80";
    else if (value > 60) return "value is More Than 90";
    else return "value is more than 60";
}

function score2(value) {
    if (value > 60) return "value is More Than 90";
    else if (value > 70) return "value is More Than 70";
    else if (value > 80) return "value is More Than 80";
    else if (value > 90) return "value is More Than 90";
    else return "value is more than 90";
}

function rps(user, computer) {
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "rock") return "computer wins";
    if(user === "rock" && computer === "paper") return "computer wins";
    if(user === "paper" && computer === "scissor") return "computer wins";
    return "it's a tie";
}

function rps2(user, computer) {
    if(user === computer) return "It's a tie!"

    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    return "computer Wins";
}

















 















// ------------------------------------------------------------

// // Example 1:
// let x = 2;
// switch (x) {
//     case 2:
//         console.log("Two");
//     case 3:
//         console.log("Three");
// }
// // output: Two Three

// // ------------------------------------------------------------
// // Example 2:

