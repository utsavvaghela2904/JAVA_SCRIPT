JavaScript provides three ways to declare variables:
var
let
const
var a = 10;
var _123 = "Hello";
var $123 = "World";


var, let, and const
var
Can be redeclared
Can be reassigned
Function-scoped
Hoisted with undefined
var d;        // declaration
var d = 12;   // redeclaration & initialization


let
Cannot be redeclared
Can be reassigned
Block-scoped
Hoisted but in Temporal Dead Zone
let name1 = "user name1";

var temp = 12;
temp = "number";        // reassignment
var temp = "new value"; // redeclaration (allowed with var)



Scope in JavaScript
Types of Scope
Global Scope
Block Scope
Function Scope

var
var e = 23; // global scope
console.log(e);

{
    var e = 25; // NOT block-scoped
    console.log("Block Scope " + e);
}

function abc() {
    var e = 45; // function scope
    console.log("Function Scope " + e);
}
abc();

console.log(e);

let
let f = 23; // global scope
console.log(f);

{
    let f = 25; // block scope
    console.log("Block Scope " + f);
}

function abc() {
    let f = 45; // function scope
    console.log("Functional Scope " + f);
}
abc();

console.log(f);


Temporal Dead Zone (TDZ)
when you create a variable into js that break into two part first is declare and second is initialize part that go down

console.log(temp_b); // undefined
var temp_b = 24;

console.log(j); // ❌ ReferenceError
let j = 12;


Hoisting Explained
JavaScript breaks variable creation into two steps:
Declaration (hoisted)
Initialization (not hoisted)
var temp_d = 12;

// Internally becomes:
var temp_d;      // hoisted (undefined)
temp_d = 12;     // initialization
var   --> hoist --> undefined
let   --> hoist --> error
const --> hoist --> error


TASK------------------------------

<h1>Example or Excercise:</h1>

<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: error</p>
<p>Why : let variable is not allowed to use before declare </p>
</div>

<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undifiend</p>
<p>Why : var is allowed to use before itialize </p>
</div>

<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error:2 </p>
<p>Why : because var is function scope not block scope</p>
</div>

<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: inside : 20
                    inside : 10</p>
<p>Why : let is block and function scope </p>
</div>

<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: user
                    error </p>
<p>Why : because person is object and first object value not change but second time object value got empty so error come </p>
</div>