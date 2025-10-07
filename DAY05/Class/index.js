console.log("Day 5");

for (let count = 1; count <= 5; count++) {
    // console.log(count);
}

// Addition of even numbers between 1 to 100

let sum = 0
for (let count = 1 ; count <= 100; count++) {
    if (count % 2 == 0) {
        sum = sum + count
    }
    
}
// console.log(sum);

for (let count = 2 ; count <= 100; count = count + 2) {
    // console.log(count);
}

let language = "JavaScript"

for (let i = 0; i < language.length; i++) {
    // console.log(language[i]); 
    // console.log(language.charAt(i)); 
}

// For outside for loop the inside for loop completes fully
// Then outside for loop continues and then inside for loop completes fully
for (let i = 1; i <= 3; i++) {
    for (let i = 1; i <= 3; i++) {
        // console.log("row "+ i + " Col " + i);
        // console.log("row", i, "Col", i); // , automatically adds space
    }
}


for (let i = 1, j = 10; i <=10 && j >= 1; i++, j--) {
    // console.log(`i : ${i}, j : ${j}`);
}


// infinite loop

// for(;;)  {
//     // console.log("hi");
// }