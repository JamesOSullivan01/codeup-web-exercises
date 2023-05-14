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
