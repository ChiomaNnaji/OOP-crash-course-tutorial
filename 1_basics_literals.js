// object.property()  You can call a property on an object if it has a property associated with it
// object.method()    Or a function associted with it called 'the function'. You can either have a property like a string, an array, an object literal or can be a function that can actually execute.

// Object = strings, numbers, boolean (primitives)
// You can use methods on strings

// Object with a method
// Basically, 'Hello' is a primitive, it's not an object. But when you call a method (like '.toUpperCase') on it, JavaScript behind the scene adds a wrapper to it.
// const s = 'Hello';
// console.log(s.toUpperCase());

// You can create strings as objects
// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// DOM objects - window objects/property. You can just use 'alert(1)' instead of 'window.alert(1)' since window is a parent object
// console.log(window);
// window.alert(1); 
// alert(1);
// console.log(navigator.appVersion);

// Object literals

// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013'
// };
// console.log(book1);

// To call an individual property for e.g title
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013'
// };
// console.log(book1.title);

// Putting function as a property
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };
// console.log(book1.getSummary());

// To create more than one book
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
// console.log(book2.getSummary());

// To get other values of an object
// console.log(Object.values(book2));

// To get the keys. This is where the constructor comes in instead of creating more than one getSummarys
// console.log(Object.keys(book2));



