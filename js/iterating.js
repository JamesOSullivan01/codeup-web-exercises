(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['Matthew', 'Mark', 'Luke', 'John'];

/**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names.indexOf("Matthew"));
    console.log(names.indexOf("Mark"));
    console.log(names.indexOf("Luke"));
    console.log(names.indexOf("John"));
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log((name));
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let myNumbers = [1,2,3,4,5];

function first () {
    return myNumbers[0]
}

    console.log(first());

    function second () {
        return myNumbers[1]
    }

    console.log(second());


    function last () {
        return myNumbers[4]
    }

    console.log(last());
// myNumbers.forEach(function(num, index) {
//     console.log(`${index}: ${num}`)
// })


// // declaring an array
// let emptyArr = [];
//
// let cheeses = ['Cheddar', 'String', 'Wensleydale']; // this array contains 3 elements
//
//     console.log(cheeses[1]); // This prints the second element in our array
//     console.log(cheeses.indexOf("Cheddar")); // This will print 0
//     console.log(cheeses[0].indexOf("brie")); // This will print -1
//     console.log(cheeses.indexOf("White Cheddar")); // This  will also print -1
//     console.log(cheeses.length) // prints the number 3
//
//
//     // let's create a loop to print all of our cheese to the console.
//
//     for (let i = 0; i < cheeses.length; i++) {
//         console.log(cheeses[i]); //prints out the cheeses of the array in order
//     }
//
//
//     //for-Each Loop
//
//     cheeses.forEach(function(cheese) {
//         console.log(cheese);
//     })
//
//     cheeses.forEach(function(cheese, index) {
//         console.log(`${index}: ${cheese}`);
//     })








































})();