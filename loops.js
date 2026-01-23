// // loops: - repeating code blocks
// // 1 1 1 1 1 1
// // 1 2 3 4 5 6

// // for loop
// // why use for-loop ? when you know how many times you want to report a block
// // print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// // kaya thi javanu-chhe kaya sudhi javanu-chhe --> kevi rite javanu-chhe
// // for (ex. 1 -> 50> increment by f
// //(start; end; change)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// for(let i= 20; i >=10; i--) {
//     console.log(i)
// }


// // --------------------------------------------------------------------------------

// // while loop -- do while loop
// // kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// // while (ex. 1> Hello world -> stop when condition false)
// // start
// // while(end) {
// // code
// // change
// // }
// let j = 10;
// while (j <= 20) {
//     console.log("j :", j);
//     j++;
// }

// let x = 1;
// while (x <= '50') {
//     console.log("Hello World", x);
//     x++;
// }

// let k = 50;
// while (k >= 20) {
//     console.log(k)
//     k--;
// }

// let a = 60;
// while (a >= 30) {
//     console.log(a);
//     a--;
// }

// let c = 30;
// while (c >=20) {
//     console.log(c);
//     c--;
// }

// let d = "10";
// while (d <= 20) {
//     console.log(d);
//     d++;
// }

// let f = 50;
// while (f <= 60) {
//     console.log(f);
//     f++;
// }

// let q = 50;
// while (q <= 60) {
//     console.log(q);
//     q++ ;
// }

// ------------------------------------------------------


// do while loop
// do {} while (end);
// start
// do {
// code
// change }
// while (end);
let g = 10;
do {
    console.log("do while : ", g);
    g++;
} while (g <= 20);

let h = 10;
do {
    console.log("do while : ", h);
    h--;
} while (h >= 1);

//break 
for (let i = 1; i <= 201; i++) {
    console.log(i)
    if (i == 32) {
        break;
   }
}

for (let l = 201; l >= 1; l--) {
    console.log(l)
    if (l == 32) {
        break;
   }
}

// continue
for (let a = 1; a <= 10; a++) {
    if (a == 5) {
        continue;
    }
    console.log(a)
}

for ( let b = 10; b >= 1; b--) {
    if (b == 5) {
        continue;
    }   
    console.log(b)
}

// Example 1 : Print number from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}  
// why : because we are using a for loop to iterate from 1 to 10 and print each number.
// output:
// 1
// 2 
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Example 2 : Print number from 10 to 1 using while loop.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}   
// why : because we are using a while loop to iterate from 10 to 1 and print each number.
// output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Example 3 : Print even numbers from 1 to 20 using for loop.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// why : because we are using a for loop to iterate from 1 to 20 and check if each number is even using the modulus operator.
// output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// Example 4 ; Print odd numbers from 1 to 15 using while loop
let k = 1;
while (k <= 15) {
    if (k % 2 !== 0) { // or (k % 2 == 1)
        console.log(k);
    }
    k++;
}
// why : because we are using a while loop to iterate from 1 to 15 and check if each number is odd using the modulus operator.
// output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15   

// Example 5 : Print the multiplication table of 5.
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
// why : because we are using a for loop to iterate from 1 to 10 and print the multiplication table of 5 by multiplying 5 with the iterator variable i.
// output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Example 6 : Find the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
// why : because we are using a for loop to iterate from 1 to 100 and keep adding each number to the sum variable.
// output:
// 5050

// Example 7 : Print all numbers between 1 to 50 that are divisible by 3.
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
// why : because we are using a for loop to iterate from 1 to 50 and check if each number is divisible by 3 using the modulus operator.
// output:
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30
// 33
// 36
// 39
// 42
// 45
// 48

// Example  8 : Ask the user for a number and print whether each number from 1 to that number is even or odd.
let num = prompt("give a number");
for(let i=1; i <=num; i++){
    if(i % 2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
// why : because we are using a for loop to iterate from 1 to the user-provided number and check if each number is even or odd using the modulus operator.
// output (if user inputs 5):
// 1  is odd
// 2  is even

// Example 9 : Count how many numbers between 1 to 100 are divisible by 3 or 5.
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
// why : because we are using a for loop to iterate from 1 to 100 and check if each number is divisible by 3 or 5 using the modulus operator.
// output:
// 3
// 5
// 6
// 9
// 10
// 12
// 15
// 18
// 20

// Example 10 : 
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
// why : because we are using a for loop to iterate from 1 to 100 and print each number until we reach a number that is divisible by 7, at which point we break out of the loop.
// output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// Exmple 11 :
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
// why : because we are using a for loop to iterate from 1 to 20 and print each number except those that are divisible by 3, using the continue statement to skip those numbers.
// output:
// 1 2 4 5 7 8 10 11 13 14 16 17 19 20

// Example 12 : Print First 5 Odd Numbers
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
// Then stops the loop
// Use Both if, continue and a counter + break

count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    if(count ===5){
        break;
    }
}
// why : because we are using a for loop to iterate from 1 to 100 and print only the first 5 odd numbers using a counter variable to keep track of how many odd numbers have been printed, and breaking out of the loop once we reach 5.
// output:
// 1
// 3
// 5
// 7
// 9

