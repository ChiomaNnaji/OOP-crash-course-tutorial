// Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // Instantiate an Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book1);

// To create getSummary by defining once even if you have a thousand books unlike in the Object literals, rather than defining a thousand object literals with a thousand getSummarys
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book2.getSummary());

// To get the basic summary. A good example of where to get a prototype method instead of puting it right in the constructor
console.log(book2);


 