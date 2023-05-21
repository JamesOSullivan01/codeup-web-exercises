// Write a function that takes in a grocery item object and returns a string representing the
// price per item for that object.

var avocados = {
    //Don't forger that strings need to be in quotes
    name: "avocados",
    quantity: 20,
    totalPrice: 11.50
}

function pricePerItem(item) {
    // we use "item." to access the properties of the object
    var pricePerItem = item.totalPrice / item.quantity
    return pricePerItem.toFixed(2);
}

// we can set a variable to capture the return of the function
let pricePerAvocado = pricePerItem(avocados);
console.log(pricePerAvocado);



// // Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

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




// Write a function that takes in two string arguments: the first being the string assessed, and
// the second being a single letter. The function should return a count of the occurances of the
// letter (second argument) within the string (first argument). This function should count both
// upper and lowercase instances of the letter.

// countOccurancesOfLetter("horseradish", "s") // returns 2
// countOccurancesOfLetter("Microsoft Excel: Professional Edition". "E") // returns 4
// countOccurancesOfLetter("Sanrio", "x") // returns 0


countOccurancesOfLetter("horseradish", "s") // returns 2
countOccurancesOfLetter("Microsoft Excel: Professional Edition", "E") // returns 4
countOccurancesOfLetter("Sanrio", "x") // returns 0

function countOccurancesOfLetter(str, strLetter) {
    let numOfLetters = 0;

    for (let i = 0; i < str.length; i++) {
        // MUST remember to put the [i] so that it iterates over each letter. Must set both to lowercase as well.
        if (str[i].toLowerCase() === strLetter.toLowerCase()) {
            numOfLetters++;
        }
    }
// ENSURE return statement is outside of the for loop curly braces
    return numOfLetters;
}

console.log(countOccurancesOfLetter("horseradish", "s")); // 2
console.log(countOccurancesOfLetter("Microsoft Excel: Professional Edition", "E")); // 4
console.log(countOccurancesOfLetter("Sanrio", "x")); // 0

// Write a function that takes in an array of grocery item objects and returns the object with the
// highest weightInGrams  property.



const cart = [
    {
        name: "Kingsford Charcoal",
        weightInGrams: 4535
    }, {
        name: "Krazy Glue",
        weightInGrams: 5
    }, {
        name: "NVIDIA RTX 4090",
        weightInGrams: 2186
    }
];

function findHeaviestItem(items) {
    // initial value for the heaviestItem variable should be set to an object rather than a number, because we want to return the object with the highest weight, not just the weight itself.
    let heaviestItem = items[0];

    items.forEach(function (groceryItem) {
        if (groceryItem.weightInGrams > heaviestItem.weightInGrams) {
            //we need to set current heaviest item variable = to the current object if the weight is greater than the curren heaviest item
            heaviestItem = groceryItem;
        }
    });

    return heaviestItem;
}

console.log(findHeaviestItem(cart));




//
// Write a function that takes in an array of numbers and returns an array of numbers from the
// original array that were evenly divisible by 13. If a number is not evenly divizible by 13, it
// should not be returned. If no elements within the array are evenly divisible by 13, the
// function should return an empty array.

const arr1 = [24, 25, 26, 27, 29];
const arr2 = [13, 26, 39, 52, 65];
const arr3 = [0, 1, 2, 3, 4, 5];

function getAllDivisibleByThirteen(inputArr) {
    let numsDivisibleBy13 = [];
    for (let i = 0; i < inputArr.length; i++) {
        //we have to add the first condition of !== 0 or else it will store [0] in my new array
        if (inputArr[i] !== 0 && inputArr[i] % 13 === 0) {
            numsDivisibleBy13.push(inputArr[i]);
        }
    }
    if (numsDivisibleBy13.length === 0) {
        return []; // Return an empty array if no elements were divisible by 13
    }
    return numsDivisibleBy13;
}

console.log(getAllDivisibleByThirteen(arr1));
console.log(getAllDivisibleByThirteen(arr2));
console.log(getAllDivisibleByThirteen(arr3));

// 1.  Write a function that takes in a string and returns an object with the following properties:
//       1. string  which is to be set the to the argument passed into the function.
//       2. numberOfWords  which is to be set to the number of words within the string.
//       3. instancesOfE  which to be set to the number of instances of the letter "E" within
// the argument passed into the function. The count should refelect instances of both
// uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving
// this)


function reviewString (someString) {
    let normalizeString = someString.toLowerCase();
    let arrayOfwords = normalizeString.split(' ')
    let wordCount = 0

    for (let i = 0; i < arrayOfwords.length; i++) {
        wordCount++
        // wordCount.push(arrayOfwords); <-- This is wrong shuld be wordCount++
        //If I use the push method than the word itself would be added
    }

    let numberOfEs = []


    let newObj =  {
        stringName: someString,
        numOfWords: wordCount,
        numberOfEs: countOccurancesOfLetter(normalizeString, 'e')
    }
    return newObj
}

console.log(reviewString("Dielectric Grease"));
console.log(reviewString("Street Fighter EX3"));

console.log(reviewString("99"));

















































