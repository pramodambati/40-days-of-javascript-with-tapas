console.log("Day 05")

// Name that is based on the useCase is important.

// Define or Declare a function it is similar to declaring a variable
// but not utilized ryt now.
function printThis() {
    console.log("Printing......" )
}

//  To utilize the function we need call/ invoke the function

// printThis()

// Function as an Expression

const printMe = function () {
    console.log("Print Me")
}

// printMe()

// console.log(printMe)
// console.log(printMe())

// function that maps input to the output.

// The input you pass while defineing the function is called parameters

// Parameters (placeholders or variables that we pass as an i/p to a function while declaring or defining a function) 
// Arguments : Actual values that will replace those declared variables while invoking/calling the function.
function sum(a, b) {
    const result = a + b
    // console.log(result);
    return result
}


// Arguments : Passing the actual values
let result = sum(2, 13)
// console.log(result);

function double(res) {
    return res * 2;
}

// console.log(double(result));


// Default Parameters

function calc(a, b) {
    return (2 * (a + b))
}

/*
console.log(2 + undefined); // NaN
console.log(calc(2)); // NaN
console.log(calc(2, 3)); // 10
*/

function calc1(a, b = 0) {
    return (2 * (a + b))
}

// console.log(calc1(2)); // 4
// console.log(calc1(2, 3)); // 10

// Rest Operator

// Rest means you have something and the rest of the thing.

function shoppingCart(item1, item2, ...rest ) {
    console.log(item1);
    console.log(item2);
    console.log(rest); // [3, 4, 5,  6,7, 8, 9, 10]
}

// SyntaxError: Rest parameter must be last formal parameter
// shoppingCart(1,2,3,4,5,6,7,8,9,10)

function outer() {
    // console.log("outer");
    
    return function inner() {
        console.log("inner");
    }

    // inner()
}

// inner()
// inner() // ReferenceError: inner is not defined
// outer()

let returnFunc = outer()

// console.log(returnFunc);

// returnFunc()


// callback function

// callback means call me back after some time
// A function you can pass as an argument to another function
// and call that function that you are passing at some point in time based on some condition.

const toCallBuz = false

function foo(func) {
    // console.log("foo");
    if (toCallBuz) {
        func();
    }
}
// Callback function called based on the bussiness case and user logic.

// A function without name is called Anonymous function.

/*

func = function () {
    console.log("buz");
}
*/


foo(function () {
    console.log("buz");
})

// By using named function

let buzzing = function () {
    console.log("buzzing");
}

// foo(buzzing)

// Pure Function and side effect

// Pure function provides same output for same input.
// This brings lot of predictability.

// If it is doing something else then it is called side effect.

let greetingMsg = "Hola "

function greeting(name) {
    return greetingMsg + name
}

// console.log(greeting("pramod"));
// console.log(greeting("pramod"));

greetingMsg = "Namaste "
// console.log(greeting("pramod"));
// console.log(greeting("pramod"));


// Higher Order Function (HOF)

// HOF is a function that takes another function as an parameter/argument 
// and return a function from it.


function getCamera(camera) {
    camera()
}

getCamera(function () {
    console.log("Sony");
})

function returnFunction() {
    return function() {
        console.log("Hi from returnFunction");
    }
}

const refFun = returnFunction()
refFun()

// HOF is mostly used to create wrappers.

// Arrow Function

function greetMe() {
    console.log("Hello");
}

let greetMe1 = function () {
    console.log("Hello1");
}

// Arrow Function
greetMe2 = () => {
    console.log("Hello 2");
}
greetMe2()

// If it is a single statement you don't have to write return statement.
// Other wise explicitly you need to mention return in the {}
let greetMe3 = (greetingMsg) => greetingMsg + " Great"
console.log(greetMe3("Hi"));


// IIFE(Immediately Invoked Function Expression)

(function() {
    console.log("IFFE");
})();

// To know we closed this iife we need to use ;
// index.js:215 Uncaught TypeError: (intermediate value)(...) is not a function
(function(count) {
    console.log("IFFE", count);
})(1)


// Recursion

/*function foo() {
    foo();
}*/

function fetchWater(count) {
    console.log("Fetching Water...", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1)
}

fetchWater(5)