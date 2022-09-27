const bookName = document.getElementById('name').value;
const bookAuthor = document.getElementById('author').value;
const bookPages = document.getElementById('pages').value;
const bookStatus = document.getElementById('status').value;
const bookTable = document.getElementById('book-table');

// Book storage
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Status = read;
}
const newBook = new Book(bookName, bookAuthor, bookPages, bookStatus);

// Book.prototype.info = function() {
//   return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
// }

// Dummy filling books
myLibrary.push(new Book ('Invitation to a Beheading', 'Vladimir Nabokov', '223', 'Unread' ));
myLibrary.push(new Book ('Pale Fire', 'Vladimir Nabokov', '246', 'Unread' ));

// Add books to myLibrary
function addBookToLibrary() {
  myLibrary.push(newBook);
}

console.log(myLibrary);

// Display books in myLibrary
function displayBooks() {
  myLibrary.forEach(element => {
    let card = document.createElement('div');
    card.classList.add('card');
    for (const property in element) {
      let row = document.createElement('h3');
      row.innerText = `${property}: ${element[property]}`
      card.appendChild(row);
      // console.log(element[property])
    }
    bookTable.appendChild(card);
  });
}

displayBooks();