// var, let and const -- line by line comparison

// var (ES5)
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24; //never use

// let
let temp = "abc";
const temp_const = "Hello World !!";

// declarations and intilalization
var d; //declare
var d = 12; // declare and initialize for first time

// var add value into window
// var is function scoped
//var can be redeclared and reassigned
d = 24; //reassign
var d = "Hello"; //redeclar
// temp_const = "Hello";

// scope (global, block, functional)

// var scope
var e = 23; // global scope
{
  var e = 25; // block scope
  console.log("block scope " + e);
}
function abc() {
  var e = 30; // functuional scope
  console.log("functional scope " + e);
}
abc();
console.log(e);

// let scope
let f = 200; // global scope
{
  let f = 205; // block scope
  console.log("block scope " + f);
}
function abc() {
  let f = 300; // functuional scope
  console.log("functional scope " + f);
}
abc();
console.log(f);

// TDZ :- Temporal Dead Zone
// TDZ not working on var
console.log(temp_b);
var temp_b = 24; // on var there is no TDZ

// console.log(j);
// let j = 12;

// Hoisting Impact
// Hosting --> when your create a variable into js that braek into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d; --> undefinded; --> that go to up
// var temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you error;
// Hoisting Space on var, let, cont

/*
var --> hoist --> undefined
let --> hoist --> error 
const --> hoist --> error
*/

// -------------------------------------------------------------------------

// Example 2 :
console.log(b);
var b = "username";
// output : undefined

// -------------------------------------------------------------------------

// Example 3 :
var x = 1;
{
  var x = 2;
}
console.log(x);
// output : 2

// -------------------------------------------------------------------------

// Example 4 :
let y = 10;
{
  let y = 20;
  console.log("inside: ", y);
}
console.log("outside: ", y);
// output : inside: 20 outside: 10

// -------------------------------------------------------------------------

// Example 5  :
const person = { name: "demo" };
console.log;
person.name = "user";
person = {};
// output : error

// -------------------------------------------------------------------------

// Example 1 :
console.log(nm);
let nm = "name";
// output : error

// -------------------------------------------------------------------------

