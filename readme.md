<h1> JavaScript: var, let, and const (Complete Guide with Examples) </h1>

This document provides a detailed, example-based explanation of JavaScript variable declarations: var, let, and const.

<h2> Variable Naming Rules </h2>

```js
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24; // never use
```

<h1> var (ES5) </h1>

<p> js </b>
var a = "temp";
</p>

- Function scoped
- Can be redeclared
- Can be reassigned
- Hoisted with undefined

<h1> let (ES6) </h1> 

```js
let temp = "abc";
```

- Block scoped
- Can be reassigned
- Cannot be redeclared
- TDZ applies

<h1> const (ES6) </h1> 

```js
const temp_const = "Hello World !!";
```

- Block scoped
- Must be initialized
- Cannot be redeclared or reassigned

<h1> Declaration vs Initialization </h1> 

```js
var d;
var d = 12;
```

<h1>var Scope Example</h1> 

```js
var e = 23;
{
    var e = 25;
    console.log(e);
}
function abc() {
    var e = 30;
    console.log(e);
}
abc();
console.log(e);
```

<h1>let Scope Example</h1> 

```js
let f = 200;
{
    let f = 205;
    console.log(f);
}
function abc() {
    let f = 300;
    console.log(f);
}
abc();
console.log(f);
```

<h1> Temporal Dead Zone </h1> 

```js
console.log(temp_b);
var temp_b = 24;
```

```js
console.log(j);
let j = 12;
```

<h1> Hoisting Summary </h1> 

```js
var   -> hoisted -> undefined
let   -> hoisted -> error
const -> hoisted -> error
```

<h1>  </h1> 

- Use const by default
- Use let when reassignment is needed
- Avoid var
