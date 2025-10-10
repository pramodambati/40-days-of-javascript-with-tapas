console.log("Task day 6");

/*
## 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(100))


/*
## 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
*/

function findMax(num1, num2) {
    // if (num1 > num2) {
    //     return num1
    // }  else {
    //     return num2
    // }

    return Math.max(num1, num2)
}

// console.log(findMax(2, 3))
// console.log(findMax(-2, -3))
/*
## 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
*/

function isPalindrome(str) {
    let isPal = true
    let check = Math.floor((str.length)/2)
    for (let i = 0; i < check; i++) {
        if(str[i] !== str[str.length -i - 1]) {
            isPal = false
            break
        }
    }

    return isPal

    /*

    let check = Math.floor((str.length)/2)
    for (let i = 0; i < check; i++) {
        if(str[i] !== str[str.length -i - 1]) {
            return false
        }
    }

    return true
    */
}


// console.log(isPalindrome("pramod"));
// console.log(isPalindrome("1224"));
// console.log(isPalindrome("121"));
// console.log(isPalindrome("1"));
// console.log(isPalindrome("hiih"));
// console.log(isPalindrome("amma"));

/*
## 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n.
Example 5! = 5 * 4 * 3 * 2 * 1
*/

// Let's solve this in two ways
// Normal Function

function factorial(n) {
    let fact = 1
    for(i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}

// console.log(factorial(5))

// Recurvise way

function factorial2(n) {
    if(n <= 1) {
        return 1
    }
    return n * factorial2(n-1)
} 

// console.log(factorial2(6));


/*

## 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.*/

function countVowels(str) {
    let vowelCount = 0
    let vowelSet = new Set('aeiou')
    for (let i = 0; i < str.length; i++) {
        if(vowelSet.has(str[i])) {
            vowelCount++
        }
    }
    return vowelCount
}


// console.log(countVowels("successes"));
// console.log(countVowels("pramod"));

 

function capitalizeWords(sentence) {
    return sentence.toUpperCase()
}

// console.log(capitalizeWords("hi this is pramod reddy ambati doing 40 days of tapascript"))
/*
## 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.
*/

(function printThat(str) {
    // console.log("Hello,", str + "!");
})("Javascript")


/*
## 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
*/

function greet(name, callback) {
    console.log("Hello " + name);
    callback(name);
}

function displayMessage(name) {
    console.log("Welcome, " + name + "! Glad to see you learning JavaScript.");
}

// calling the greet function
greet("Pramod", displayMessage);


/*
## 9. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {
    f1();
}
f2();
```

## 10. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```

*/