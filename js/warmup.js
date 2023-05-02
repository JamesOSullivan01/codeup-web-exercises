// Create a function that returns the number 7
function thisIsTheNumber7 () {
    return (7)
}

console.log(thisIsTheNumber7());

// // Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

// https://www.w3resource.com/javascript-exercises/javascript-function-exercise-13.php
let numberToFactor = 200;
    function findFactors (input) {
    if (typeof input === 'number' && !isNaN(input)) {

        let factors = [];
        // Loop through all numbers from 1 to input/2 and check if they are a divisor
        for (let i = 1; i <= input / 2; i++) {
            if (input % i === 0) {
                factors.push(i);
            }
        }

        // Add input as a factor
        factors.push(input);

        return factors;
} else {
    return false}
    }

console.log(findFactors(numberToFactor));

// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

// function countEs(input) {
//     if (typeof input !== 'string') {
//         return false
//     }
//     let numberOfEs = 0
//     for (let i = 0; i <= input.length; i++) {
//             if (input[i].toLowerCase() === 'e')
//                 numberOfEs++
//     }
//     return numberOfEs
// }
//
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

// Davids solution
function countEs(str) {
    if (typeof str === 'string') {
        let count = 0;
        let normalizeStr = str.toLowerCase();
        for (let i = 0; i <= str.length; i++) {
            if (normalizeStr.charAt(i) === 'e') {
                count++;
            }
        }
        return count;
    } else {
    return false}
}