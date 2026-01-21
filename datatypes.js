// Data Types:

// Two Type of Data Types:
// 1. Primitive Data Types
// copy --> real value
let a = 12;
let b = a; // a--> 12
a = a+3;

// types: string, number, boolean, null, undefined, symbol,bigint

// 2. Non-Primitive Data Types (Reference Data Types)
// copy --> give refrence of parent
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // remove value
// types: arrays [], objects {}, functions ()

// types: string, number, boolean, null, undefined, symbol,bigint

// <-----Primitive Data Types---->
// types: string, number, boolean, null, undefined, symbol, bigint
// string:
// ''-single quotes
// ""-dobule quoutes
// ``-backticks

let d = "name";
d = 'username';
d = `firstname`;

// number:
let e = 12;
e = 12.5;

// boolean:
let f = true;
f = false;  

// null:
let g = null; // empty value

// undefined:
// you dont give a value, by default vaue
let h;

// symbol:
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1==u2
let obj ={uid: 1, name: "test", email: "test@test.com"};
let u3 = Symbol("uid")
obj[u3]= "001"

// bigint:
//cheak range of number, number.max_safe_integer
let number = 9007199254740991;
number = number + 9;
let num2 = 9007199254740991n;
num2 + 3n;

// <-----non-Primitive Data Types---->
// types: arrays [], objects {}, functions ()
let temp_array = ["name", "age", "phobe number"];
let obj = {name: "test", age: 24, phone: "1234567890"};
function name(params) {}

// -------------------------------------------------------------------------

// Example 1:
console.log(true + false); 
// 1

// -------------------------------------------------------------------------

// Example 2:
console.log("12" + 12); 
// "1212"

// -------------------------------------------------------------------------

// Example 3:
console.log("12" - 1); 
// 11

// -------------------------------------------------------------------------

// Example 4:
console.log(!!undefined);
// false

// -------------------------------------------------------------------------

// Example 5:
console.log("12" - 1); 
// 11

// -------------------------------------------------------------------------

// Example 6:
let x;
console.log(x);
// output: undefined
let y = null;
console.log(y);
// output: null

// -------------------------------------------------------------------------

