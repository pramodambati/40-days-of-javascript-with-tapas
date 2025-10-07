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
    console.log(stars); 
}

let nums = ""

for (let i = 1; i <=5; i++) {
    nums = ""
    for (let j = 1; j <=i; j++) {
        nums = nums + j
    }
    console.log(nums);
}

/*
2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30

*/


/*
3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.

5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876
6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
*/