// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
    };

// Magazine Constructor
// Create Magazine object to inherit the properties of the book
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype to get summary
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2023', 'Jan');
// console.log(mag1);

// Inherit Prototype to get summary (the 'console.log' comes under here)
// console.log(mag1.getSummary());

// To use Magazine Constructor (basic prototype inheritance)
Magazine.prototype.constructor = Magazine;
console.log(mag1);
