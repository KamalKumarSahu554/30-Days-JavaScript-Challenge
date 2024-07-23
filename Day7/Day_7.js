// Activity 1:
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 1997,
};
// console.log(book);
// console.log(book.title, book.author);

// Activity 2:
book.titleAndAuthor = function () {
  console.log(
    `The book title is "${book.title}" and the author is "${book.author}"`
  );
};
// console.log(book.titleAndAuthor());

book.year = function (year) {
  this.year = year;
};
book.year(1999);
// console.log(book);

// Activity 3:
const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      yearPublished: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      yearPublished: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      yearPublished: 1851,
    },
  ],
};
// console.log(library);
// for (let i = 0; i < library.books.length; i++) {
//   console.log(library.books[i].title);
// }

// Activity 4:
book.titleAndYear = function () {
  console.log(
    `The book title is "${this.title}" and the published year is "${this.year}"`
  );
};
// console.log(book.titleAndYear());

// Activity 5:
for (const key in book) {
  // console.log(`${key}: ${book[key]}`);
}

console.log("Keys of the book object:");
Object.keys(book).forEach((key) => {
  console.log(key);
});
console.log("\nValues of the book object:");
Object.values(book).forEach((value) => {
  console.log(value);
});
