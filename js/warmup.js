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

// function extractNames(input) {
//     let names = []
//
//     input.forEach(function (arrayItem) {
//         names.push(arrayItem.name)
//     });
//     return names
// }
//
// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];


function largestHeight (arr) {
    // need to initialize this as an obj which is why it is "arr[0}" instead of = '[0]'
    //We initialize to the first hamster in the array
    let tallestHamster = arr[0];

    arr.forEach(function(hamster) {
        if(hamster.heightInMM > tallestHamster.heightInMM) {
            tallestHamster = hamster;
        }
    });
    return tallestHamster;
}

console.log(largestHeight(hamsters));
// console.log(largestHeight(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}


// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

function singleFurColor(arr) {
    let plainHamsters = [];
    arr.forEach(function(hamster) {
        if (hamster.fur.length === 1) {
            plainHamsters.push(hamster)
        }
        });
    return plainHamsters;
}

console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];



// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

// function mostColorful(arr) {
//     let mostColorfulHamster = []
//     arr.forEach(function(hamster) {
//        if (hamster.fur.length > mostColorfulHamster.length) {
//            mostColorfulHamster = hamster;
//        }
//     });
//     return mostColorfulHamster;
// }
//
console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};


// Davids solution:
function mostColorful(arr) {
    //set this to an object
    let mostColors = {fur: []};

    arr.forEach(function(obj) {
        if (obj.fur.length > mostColors.fur.length) {
            mostColors = obj
        }
    });
    return mostColors;
}

console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};



// Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.

// function describeNumber(num) {
//     let numObj = {
//         number: 0,
//         evenOrOdd: "",
//         factors: []
//     }
//     if (typeof num === 'number') {
//         Object.keys(numObj).forEach(function(key){
//
//         })
//     }
//     return numObj
// }

function describeNumber(num) {
    return {
        number: num,
        evenOrOdd: (num % 2 === 0) ? "even" : "odd",
        factors: findFactors(num),
        numberOfDigits: (`${num}`).length
    }
}


console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};



// console.log(10 % 3)

// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

function multiplyElementsByThree(arr) {
    let newArr = []

    arr.forEach(function(num) {
       let newNumber = num * 3
        newArr.push(newNumber);
    });
    return newArr
}

console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];













