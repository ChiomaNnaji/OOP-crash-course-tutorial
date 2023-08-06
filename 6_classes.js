// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
// }

// // Instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// console.log(book1);

// To add method to the class
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

// Static Methods: Having Methods in class without instantiating an object
static topBookStore() {
    return 'Barnes & Noble';
    }
}
console.log(Book.topBookStore());

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');
// console.log(book1);
// To revise one
// book1.revise('2023');
// console.log(book1);
