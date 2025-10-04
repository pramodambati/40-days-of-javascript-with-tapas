/*
1. Odd or Even?
Take a number and find if the number is an odd or even number.
Print the number and result in the console.
*/

let num = 5
oddOrEven = num % 2 == 0 ? "Even" : "Odd"

console.log(oddOrEven);


/*
2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

Manage age as a variable.
Check if the age is elligible for a driving license and print it on the console accordingly.
*/
let age = 21

eligibilityToGetDrivingLicense = age >=18 ? "yes" : "No"

/*
3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

You get 12,300 rupees as your monthly salary.
You get a 20% bonus on your annual salary.
How much money do you make per annum as a CTC?
*/

let salary = 12300
let annualSalary = (salary * 12)  
let ctc = annualSalary * 1.2
console.log(ctc); // 177120

/*
4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

Create a color variable.
Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
*/

let color = "Red";

Move = color == "Green" ? "Go" : "Stop"
console.log(Move);

/*
5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

Create a units variable. Based on this value you will calculate the total electricity bill for a months.
If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

let units;

let chargeOfUnit = 150

let consumeEachDay = 1

let consumeEachMonth = consumeEachDay * 30

let eachMonthBill = consumeEachMonth* chargeOfUnit

console.log("Charge per month " + eachMonthBill);

let annualPayment = eachMonthBill * 12

amountAfterDiscount = annualPayment * 0.8

console.log("amountAfterDiscount "+ amountAfterDiscount);




/*
6. Leap Year Checker
Is 2025 a Leap Year?

Take year as input.
Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/

let year = 2025
let leapYear = 2025 % 4 == 0 ? "Leapyear" : "Not a Leapyear"
console.log(leapYear);

// Check if leap year using ternary operator
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
    ? "Yes, it's a Leap Year!" 
    : "No, it's not a Leap Year.";

/*
7. Max of Three Numbers
Find the max number from the lot.

Take three numbers and assign them to variables p, q, and r.
Now find the maximum of these three numbers using the comparison operators.
*/

let p = 1
let q = 2
let r = 3

if (p >= q && p >= r) {
    max = p
} else if (q >=p && q >=r) {
    max = q
} else {
    max = r
}

console.log('max '+ max);

/*
8. Bitwise Doubling
A tricky one for you

Create a variable count and assign a value, say, 5.
Now use the Bitwise shift operator to make the number double.
Print it on the console. */

// By using left shift operator

let count = 5

console.log(5 << 2);
