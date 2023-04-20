// https://www.programiz.com/javascript/examples/multiplication-table
function showMultiplicationTable() {
    let number = 7
    for (let i = 1; i < 11; i++) {
        let result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}

showMultiplicationTable();

// randomNumber will generate a new number everytime iteration because it is INSIDE the loop.
// otherwise if it were outside it would only generate once
for (let i = 10; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}
// https://www.tutorialstonight.com/number-pattern-programs-in-javascript
let n = 9;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}

