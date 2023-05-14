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

// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

// Davids solution
// function countEs(str) {
//     if (typeof str === 'string') {
//         let count = 0;
//         let normalizeStr = str.toLowerCase();
//         for (let i = 0; i <= str.length; i++) {
//             if (normalizeStr.charAt(i) === 'e') {
//                 count++;
//             }
//         }
//         return count;
//     } else {
//     return false}
// }
//Write a function that takes in a string and returns true if the argument contains at least one instance of the letter ‘e’. This should be case-insensitive. If the argument is not a string, or if the argument does not contain ‘e’ it should return false.

function areThereEs(str) {
    if (typeof str !== 'string') {
        return false;
    }

    let normalizeString = str.toLowerCase();
    for (let i = 0; i < normalizeString.length; i++) {
        if (normalizeString.charAt(i) === 'e') {
            return true;
        }
    }

    return false;
}

console.log(areThereEs("Ease")); // returns 2;
console.log(areThereEs("teleconference")); // returns 5;
console.log(areThereEs("TOM")); // returns 0;
console.log(areThereEs(true)); // returns false;
console.log(areThereEs(['e', 'E'])); // returns false;
console.log(areThereEs()); // returns false;

function fizzBuzz () {
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuxx");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz());


// create a do-while loop that starts at the number 2 and displays the number saured while output is less than 1000000.

let i = 2;
do {
    console.log(i);
    i = i ** 2;
} while (i ** 2 < 1000000);

console.log(i);


// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

function addEmUp(arr) {
    if (typeof arr !== 'object') {
        return false
    }
    let addedArr = 0;
    // since we are summing up numbers this variable needs to be sewt to zero and not an array
    // arr.forEach(function(arrOfNumbers) {
    //     addedArr += arrOfNumbers
    // });
    for(let i = 0; i < arr.length; i++) {
        addedArr += arr[i]
        //There is no need to parsefloat these as they are already numbers
    }
    return addedArr;
};

console.log(addEmUp([2,6,19])); // returns 27
console.log(addEmUp([-99, 180, -5])); // returns 76
console.log(addEmUp([44,10,7])); // returns 61
console.log(addEmUp([-100])); // returns -100
console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
console.log(addEmUp([-13, -92, -3500])) // returns -3605


// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.

function explainString() {
    let properties = string.split(', ');
    let obj = {};

    properties.forEach(function(property) {
        let tup = property.split(':');
        obj[tup[0]] = tup[1];
    });
    if (function countEs(input) {
        if (typeof input !== 'string') {
            return false
        }
        let numberOfEs = 0
        for (let i = 0; i <= input.length; i++) {
            if (input[i].toLowerCase() === 'e')
                numberOfEs++
        }
        return numberOfEs
    });


}

// function explainString(str) {
//     return {
//         string: str,
//         numberIfEs: countEs(str),
//         isEvenLength: str.length % 2 === 0
//     }
// }
//
// console.log(explainString("cheese") // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog") // returns {string: "dog", numberOfEs: 0, isEvenLength: false}



// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function extractNames(input) {
    let names = []

    input.forEach(function (arrayItem) {
        names.push(arrayItem.name)
    });
    return names
}

console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];






