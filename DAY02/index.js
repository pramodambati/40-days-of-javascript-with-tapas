console.log('Day 02');

// Variables : Variables are used to stored data in JS.

// let/const storage_name = value

// Specifiers let/const/var control on the scope, mutability, hoisting.

let fruit = "mango"

// let 2morrow; // not allowed

// let react-play // not allowed

let sayHi = 'hi'

let $ = 'dollar'
console.log($);

let myName = "Pramod"
let myname = "Reddy"

// Javascript variable names are case sesnitive

// var address = "Hyderabad"
// console.log(address);

// var address = "USA"
// console.log(address);

// let address = "Hyderabad"
// console.log(address);

// let address = "USA" // SyntaxError: Identifier 'address' has already been declared


const address = "Hyderabad"
console.log(address);

// address = "USA" // TypeError: Assignment to constant variable.
// console.log(address);

let age; // Delcaration of variable

age = 24 // Assigning of variable

// Primitve or Non-Primitive

/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
*/

let name, salary, department;

let student = {
    name : "Pramod",
    age : 22,
    isEnrolled : true
};

console.log(student);
console.log(student.name);
console.log(student.hi);

let arr = [1, 2, 3, 4, 5]



// Tasks are already done in the class itself

// Leart about how JS Sees code ?

/*
1. Tokenizing
2. Parsing
3. Intrepreting
4. Generating Code

You can visually see here
https://astexplorer.net/

*/
