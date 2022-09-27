let myLibrary = [];

const bookName = document.getElementById('name').value;
const bookAuthor = document.getElementById('author').value;
const bookPages = document.getElementById('pages').value;
const bookStatus = document.getElementById('status').value;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
}

const newBook = new Book(bookName, bookAuthor, bookPages, bookStatus);

// Filling books
myLibrary.push(new Book ('Invitation to a Beheading', 'Vladimir Nabokov', '223', 'Unread' ));
myLibrary.push(new Book ('Pale Fire', 'Vladimir Nabokov', '246', 'Unread' ));

function addBookToLibrary() {
  myLibrary.push(newBook);
}

// addBookToLibrary();
console.log(myLibrary);