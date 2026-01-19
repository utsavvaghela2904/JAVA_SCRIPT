var a = 10;
var _123 = "Hello";
var $123 = "World";

b = 23 ; // never use

// let temp = "abc";
const pi = 3.14;

var d ; // declare
var d = 12; // declare and initialize
// var add value in windows
var name = "user name";
let name1 = "user name1";

// reassignment , Redeclaration
var temp =12;
temp = "number"; // reassignment
var temp = "new value"; // redeclaration


// Scope ( Global , Local and Function )
var e = 23 ; // global scope
console.log(e);
{
    var e = 25; // Block Scope
    console.log("Block Scope" + e);
}
function abc(){
    var e = 45; // Function scope
     console.log("Function Scope" + e);
}
abc();
console.log(e);

//let
let f = 23 ; // global scope
console.log(f);
{
    let f = 25; // Block Scope
    console.log("Block Scope" + f);
}
function abc(){
    let f = 45; // Functional scope
     console.log("Functional Scope" + f);
}
abc();

console.log(f);

//Temporal Dead Zone (TDZ)
// TDZ not working on var 
console.log(temp_b);
var temp_b = 24; // on var there is no TDZ

//console.log(g);
console.log(j);
let j =12;

//Hosting Impact 
// when you create a variable into js that break into two part first is declare and second is initialize part that go down

var temp_d = 12; // declare part
// var temp_d; ---> undifiend ; ---> that go to up
temp_d = 12; // that goto down initialize part

//if you use console.log before initialize part you get undifiend
let temp_b_let =24;
// let variable not use before use 
// if you use console.log before initialize that give you error

// hosting Impact on var , let , const
/*
var --> hoist --> undifiend
let --> hoist --> error
const --> hoist --> error
*/