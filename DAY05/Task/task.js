/*
1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
-----------------
*
* *
* * *
* * * *
* * * * *
-----------------
*/

let stars = ""

for(let i = 1; i <=5; i++) {
    stars = ""
    for (let j = 1; j <= i; j++) {
        stars = stars + "*"
    }
    // console.log(stars); 
}

let nums = ""

for (let i = 1; i <=5; i++) {
    nums = ""
    for (let j = 1; j <=i; j++) {
        nums = nums + j
    }
    // console.log(nums);
}

/*
2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30

*/
let N = 3
for (let i = 1; i <= 10; i++) {
    // console.log(`${N} * ${i} = ${N*i}`)
}

/*
3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
*/
let sum = 0

for (let i = 1; i <= 500; i++) {
    if (i % 2 != 0) {
        sum += i
    }
}
// console.log(sum);

/*
4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue
    }
    // console.log(i);
}

/*
5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876
*/

let digit = '6789'
let reverseDigit = 0
while (digit) {
    let rem = digit % 10
    reverseDigit = reverseDigit * 10 + rem
    digit = Math.floor(digit/10)
}
console.log(reverseDigit);
console.log(typeof reverseDigit);


/*
ven though you started with '6789' (a string):

% and / force implicit conversion to number

So JS quietly runs numeric operations

And reverseDigit naturally ends up as a number ✅
*/

/*
6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
*/

/*
For loop : When we know the number iterations we need to loop.
While loop : When we don't the number iterations but we need to break on a condition
Do-while loop : Execute the code atleast one time before checking the condition.
*/