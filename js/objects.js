(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *
     */
    let person = {
        firstName: "Rick",
        lastName: "Sanchez"
    };
    console.log(person.firstName) // "Rick"
    console.log(person.lastName) // "Sanchez"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName;
    };
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];


    /*
        This receives an object with a name and an amount
     */
    let displayInformation = function (obj) {
        let total = obj.amount;
        let discount = 0;
        if (obj.amount > 200) {
            total = obj.amount * 0.88;
            discount = -1 * obj.amount * 0.12;
        }
        console.log(`${obj.name}\nsubtotal:${obj.amount}\ndiscount: ${discount}\ntotal:${total}`);
    }

    // Note: consider a ternary for variable assignments that depend on a condition
    // let dicount = obj.amount > 200
    //     ? obj.amount * 0.88          // this is the "if"
    //     : obj.amount;                // this is the "else"

    shoppers.forEach(displayInformation);
    // the foreach is calling the function displayInformation
    // with every single element inside the array
    // What it is actually doing:
    // displayInformation(shoppers[0])
    // displayInformation(shoppers[1])
    // displayInformation(shoppers[2])


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

// let books = [
//         {title: "Don Quixote", author: {firstName: 'Miguel', LastName: 'De Cervantes'}},
//         {title: "A Tale Of Two Cities", author: {firstName: 'Charles', LastName: 'Dickens'}},
//         {title: "The Lord of the Rings", author: {firstName: 'J.R.R.', LastName: 'Tolkien'}},i
//         {title: "The Little Princess", author: {firstName: 'Antonie', LastName: 'De Saint-Exupery'}},
//         {title: "Harry Potter and the Sorcerer's Stone", author: {firstName: 'J.K.', LastName: 'Rowling'}}
//     ]

// This is the industry standard formatting, USE THIS!
    let books = [
        {
            title: "Don Quixote",
            author: {
                firstName: 'Miguel',
                lastName: 'De Cervantes'
            }
        },
        {
            title: "A Tale Of Two Cities",
            author: {
                firstName: 'Charles',
                lastName: 'Dickens'
            }
        },
        {
            title: "The Lord of the Rings",
            author: {
                firstName: 'J.R.R.',
                lastName: 'Tolkien'
            }
        },
        {
            title: "The Little Princess",
            author: {
                firstName: 'Antonie',
                lastName: 'De Saint-Exupery'
            }
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: {
                firstName: 'J.K.',
                lastName: 'Rowling'
            }
        }
    ]
    console.log(books[2].title);
    console.log(books[2].author);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function (book, index) {
        console.log("book # " + (index + 1) + "\n" + book.title + "\n" + book.author.firstName + " " + book.author.lastName);
    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // This function is making (returning) an object with the inputed properties.
    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
    }
// This function accepts a single parameter and prints out the info to the console
    function showBookInfo(book) {
        console.log(`${book.title} by ${book.author.firstName} ${book.author.lastName}`);
    }
// Here I am using createBook function from earlier to create 5 book objects
    // The resulting objects are then stored to the 'books' array
    const books = [
        createBook("Don Quixote", "Miguel", "De Cervantes"),
        createBook("A Tale Of Two Cities", "Charles", "Dickens"),
        createBook("The Lord of the Rings", "J.R.R.", "Tolkien"),
        createBook("The Little Prince", "Antoine", "de Saint-Exupéry"),
        createBook("Harry Potter and the Sorcerer's Stone", "J.K.", "Rowling")
    ];
// This is iterating through the 'books' array. For each book object, it calls the showBookInfo function which has a
    // console.log in it that is actually printing the book information
    for (let i = 0; i < books.length; i++) {
        showBookInfo(books[i]);
    }



})();



















































