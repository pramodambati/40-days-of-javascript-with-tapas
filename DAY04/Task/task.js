/*1. What will be the output of this code snippet and why?*/
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// o/p : It's a normal day.

// Because the letters are not matching


/*
2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”. 
*/
let amount = 450
if (amount % 100 == 0) {
    console.log("Withdrawal successful");    
} else {
    console.log("Invalid Amount");    
}

/*
3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/

let a = 20
let b = 10

let condition = '-'
console.log(condition);

switch(condition) {
    case '+' :
        console.log(`${a} + ${b} = ${a + b}`);
        break
    case '-' :
        console.log(`${a} - ${b} = ${a - b}`);
        break
    case '*' :
        console.log(`${a} * ${b} = ${a * b}`);
        break
    case '/' :
        console.log(`${a} / ${b} = ${a / b}`);
        break
    case '%' :
        console.log(`${a} % ${b} = ${a % b}`);
        break
    default:
        console.log("Please provide the correct symbol");       
}

/*
4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/

/*
let age = -10;

if (age < 18) {
    console.log("Ticket price is $3");
} else if (age >= 18 && age <= 60) {
    console.log("Ticket price is $10");  
} else {
    console.log("Ticket price is $8");
}
*/

let age = -10;

if (age < 0) {
  console.log("Invalid age");
} else if (age < 18) {
  console.log("Ticket price is $3");
} else if (age <= 60) {
  console.log("Ticket price is $10");
} else {
  console.log("Ticket price is $8");
}


/*
5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based.
Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/

let month = "April";

switch (month) {
  case "March":
  case "April":
    console.log("Aries");
    break;

  case "April":
  case "May":
    console.log("Taurus");
    break;

  case "May":
  case "June":
    console.log("Gemini");
    break;

  case "June":
  case "July":
    console.log("Cancer");
    break;

  case "July":
  case "August":
    console.log("Leo");
    break;

  case "August":
  case "September":
    console.log("Virgo");
    break;

  case "September":
  case "October":
    console.log("Libra");
    break;

  case "October":
  case "November":
    console.log("Scorpio");
    break;

  case "November":
  case "December":
    console.log("Sagittarius");
    break;

  case "December":
  case "January":
    console.log("Capricorn");
    break;

  case "January":
  case "February":
    console.log("Aquarius");
    break;

  case "February":
  case "March":
    console.log("Pisces");
    break;

  default:
    console.log("Invalid month");
}


/*
6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
*/

let side1 = 60
let side2 = 60
let side3 = 60


if (side1 == side2 && side2 == side3) {
    console.log("Equilateral Triangle");   
} else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("Isosceles Triangle");   
} else {
    console.log("Scalene Triangle");
}

/*
❌ What actually happens

side1 == side2 == side3 is evaluated left to right:

First, side1 == side2 → true

Then it checks true == side3

Since true becomes 1 in numeric comparison, you’re effectively checking:

1 == 60  // false


So even when all sides are equal, this condition gives false.
*/