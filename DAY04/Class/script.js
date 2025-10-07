console.log("Day 04");

let catchingBus = true

if (catchingBus) { // From here the control will be branched out.
    console.log("I will reach home on time");  
} else {
    console.log("I will late to reach home");
}

// Whether an individual is eligible to vote or not?

let age

if (age >= 18) {
    console.log("You are elgible to vote");
} else {
    console.log("You are  NOT elgible to vote");
}

// Let's build a grading system
// if score is >= 90, Grade A
// if score if >= 80, Grade B
// If score if >= 70, Grade C
// Fail

let score = 76;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score < 70) {
    console.log("Fail");
}

let day = 51
switch (day) {
    case 1 :
        console.log("Monday");
        break
    case 2 :
        console.log("Tuesday");
        break
    case 3 :
        console.log("Wednesday");
        break
    case 4 : 
        console.log("Thrusday");
        break
    case 5 :
        console.log("Friday");
        break
    case 6 :
        console.log("Saturday");
        break
    case 7 :
        console.log("Sunday");
        break
    default :
        console.log("Invalid number");
}

let name = "tapascript"

switch (name) {
    case "tapascript":
        console.log("Learning 40 days of JS");
        break
    default:
        console.log("Please enter the correct name");
        
}

// switch case uses jump table. Performance and redablity
// Logical condition we are going to if-else.
// For fixed value if there are many to check use switch


const city = "Bangalore";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log("All these are in India");
    break;
  case "New York":
  default:
    console.log("It is in USA");
}

// Output is : All these are in India