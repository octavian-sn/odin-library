const bookTable = document.getElementById('book-table');
const display = document.getElementById('main');

// Book storage
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Status = read;
}

// Add books to myLibrary
function addBookToLibrary() {
  const bookName = document.getElementById('name').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pages').value;
  const bookStatus = document.getElementById('status').value;
  const newBook = new Book(bookName, bookAuthor, bookPages, bookStatus);
  myLibrary.push(newBook);
}

// Dummy filling books
myLibrary.push(new Book ('Invitation to a Beheading', 'Vladimir Nabokov', '223', 'Unread' ));
myLibrary.push(new Book ('Pale Fire', 'Vladimir Nabokov', '246', 'Unread' ));

console.log(myLibrary);

function displayBooks() {
  const table = document.createElement('table');
  let firstRow = document.createElement('tr');
  let headName = document.createElement('th');
  headName.innerText = 'Name';
  firstRow.appendChild(headName);
  let headAuthor = document.createElement('th')
  headAuthor.innerText = 'Author';
  firstRow.appendChild(headAuthor);
  let headPages = document.createElement('th')
  headPages.innerText = 'Pages';
  firstRow.appendChild(headPages);
  let headStatus = document.createElement('th')
  headStatus.innerText = 'Status';
  firstRow.appendChild(headStatus);
  table.appendChild(firstRow);
  myLibrary.forEach(book => {
    let secondRow = document.createElement('tr');
    for (const property in book) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(book[property])
      cell.appendChild(cellText);
      secondRow.appendChild(cell);
    }
    table.appendChild(secondRow);
  });
  bookTable.appendChild(table);
  table.setAttribute("border", "2");
}

function addBookPopup() {
  const window = document.createElement('div')
  window.classList.add('new-window');

  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('placeholder', 'Name');
  window.appendChild(nameInput);

  const authorInput = document.createElement('input')
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('name', 'author');
  authorInput.setAttribute('id', 'author');
  authorInput.setAttribute('placeholder', 'Author');
  window.appendChild(authorInput);

  const pagesInput = document.createElement('input')
  pagesInput.setAttribute('type', 'number');
  pagesInput.setAttribute('name', 'pages');
  pagesInput.setAttribute('id', 'pages');
  pagesInput.setAttribute('placeholder', 'Pages');
  window.appendChild(pagesInput);

  const statusInput = document.createElement('input')
  statusInput.setAttribute('type', 'radio');
  statusInput.setAttribute('name', 'name');
  statusInput.setAttribute('id', 'name');
  statusInput.setAttribute('placeholder', 'Name');
  window.appendChild(statusInput);

  display.appendChild(window);
}

const button = document.getElementById('new-book');
button.addEventListener('click', addBookPopup)

// displayBooks();
// console.log('Testing bananas');