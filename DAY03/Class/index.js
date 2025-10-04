console.log("Day 03");

// Operator - Symbols + - * /
// Operands - x+y, x and y are the operands.
// Expression x = 2 (Assigning Expressiong) // (Evaluating Expression) 3 + 4


// Arithmetic Operator

let a = 3
let b = 3

let f_name = "Pramod"
let l_name = " Reddy"

// console.log(f_name + l_name);

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// console.log(a ** b);

let count = 5
// console.log(count++); // count = count + 1 (Post Increment)
// console.log(count);

// console.log(++count); // Increase the value and then return the count
// console.log(count--); // count = count -1
// console.log(--count);

// Assignment operators

let x = 10
x += 5 // x = x + 5 (15)
x -= 3 // x = x - 3 (12)
x *= 2 // X = x * 2 (24)
x /= 4 // x = x / 4 (6)
// console.log(x);


// Comparison Operators

// console.log(4 == 5);
// console.log(0 == false); // == loosely equality operator(Converts to the nearest possible type)


// if(-1) {
//     console.log("true in if block");
// } else {
//     console.log("false in if block");
// }

// console.log(3 == "3");

// strict equality operator

// console.log(3 === '3');
// console.log(null === null);
// console.log(undefined === undefined);


// NaN = Not a Number

let obj1 = {name : "tapaScript"} // xx0011
let obj2 = {name : "tapaScript"} // yy022
let obj3 = obj1

//  We are not comparing the values we are comparing the address.
// console.log("obj1 == obj2 :  " + (obj1 == obj2));

// console.log(obj1 == obj2);
// console.log(obj1 == obj3);
// console.log(obj1 != obj2);
// console.log(obj1 === obj2);


// Logical operators
// && || ?? !

// console.log(false && false); // false
// console.log(true && false); // false
// console.log(true && true); // true
// console.log(false && true); // false

// console.log("Cow" && "Horse"); // "Horse"

// 4 > 5 && 4 === 6

// console.log(false || false); // false
// console.log(true || false); // true
// console.log(true || true); // true
// console.log(false || true); // true

// console.log("Cow" || "Horse"); // "Cow"
// in case of || If the first operand can be converted to true will return op1
// in case of && If the first operand can be converted to true will return op2

// console.log(-1 || 9); // -1
// console.log(-1 && 9); // 9

// console.log(!false); // true

//  Nullish colleance operatorn(??)

// op1 ?? op2 (If the first op1 is null or undefined return op2 otherwise return op1)

let a1 = null ?? 1 // 1
// console.log(a1);
let a2 = undefined ?? 3 // 3
// console.log(a2);
let a3 = false ?? "tapaScript" // false
// console.log(a3);
const a4 = 0 ?? "pramod" // 0
// console.log(a4); 

// Conditionally ternoray operator

// condition ? val1 : val2

let age = 23

let result = age >= 60 ? "Senior Citizen" : "Non Senior Citizen"

// console.log(result); // Non Senior Citizen

// Bitwise operators
console.log("**** Bitwise operators ****")

// 10 in decimal
// 10 in 32 bits representation of 0, 1

/*
Bitwise And : &
Bitwise Or: |
Bitwise XOr: ^
Bitwise Not: ~
LeftShift : <<
RighttShift : >>
*/

console.log(15 & 9); // 9

// 1111
// 1001
// -----
// 1001

console.log(15 | 9); // 15 

// 1111
// 1001
// -----
// 1111

console.log(15 ^ 9); // 6

// x or will return 1 only if one of them is true 

// 1111
// 1001
// -----
// 0110 

// Leftshift Operator

// 9 << 2

// 1001 << 2 => 100100

// 9 >> 2

// 1001 >> 2 => 0010

// Relation operator in operator

// grouping ()

console.log(typeof 9); //  number
console.log(typeof "pramod"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof BigInt(98766523766438681074094379012)); // bigInt
console.log(typeof Symbol("id")); // symbol

console.log(typeof [1, 2, 3]); // object
console.log(typeof {name : 'Pramod'}); // object
console.log(typeof function add(num1 , num2) {
    return num1 + num2 
}); // function

