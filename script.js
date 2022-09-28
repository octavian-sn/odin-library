const booksDisplay = document.getElementById('book-table');
const mainDisplay = document.getElementById('main');
const table = document.createElement('table');
const popupWindow = document.createElement('div')


// Book storage
let myLibrary = [];

// Book constructor
function Book(title, author, pages, status) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Status = status;
}

// Add books to myLibrary
function addBookToLibrary() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pages').value;
  const bookStatus = document.getElementById('new-status').value;
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  myLibrary.push(newBook);
}

// Dummy filling books
myLibrary.push(new Book ('Invitation to a Beheading', 'Vladimir Nabokov', '223', 'Unread' ));
myLibrary.push(new Book ('Pale Fire', 'Vladimir Nabokov', '246', 'Read' ));

function displayBooks() {
  // Create header row
  let headRow = document.createElement('tr');
  let headCells = ['Title', 'Author', 'Pages', 'Status']
  headCells.forEach(item => {
    let head = document.createElement('th');
    head.innerText = item;
    headRow.appendChild(head);
  })
  table.appendChild(headRow);
  // Create row for each book
  myLibrary.forEach(book => {
    let bookRow = document.createElement('tr');

    // Create cells for title/author/pages
    for (const property in book) {
      const cell = document.createElement('td');
      cell.classList.add(`${property}`);
      if (property !== 'Status') {
      const cellText = document.createTextNode(book[property])
      cell.appendChild(cellText);
      }

      // Create cells for status
      if ( property === 'Status') {
        const statusInput = document.createElement('select')
        // Change status of books from dropdown
        statusInput.addEventListener('change', function(){
          book[property] = statusInput.value;
        })
        let statuses = ['Read', 'Unread', 'Ongoing']
        statuses.forEach(item => {
          let option = document.createElement('option');
          option.value = item;
          statusInput.appendChild(option);
          option.innerText = item;
          if (book[property] === item) {
            option.setAttribute('selected', '')
          }
        })
        
        // Delete book button
        cell.appendChild(statusInput)
        const deleteBook = document.createElement('button')
        deleteBook.innerText = 'X';
        deleteBook.addEventListener('click', deleteRow);
        cell.appendChild(deleteBook);
        function deleteRow(){
          myLibrary.splice(myLibrary.indexOf(book), 1);
          table.removeChild(bookRow);
        }
      }
      bookRow.appendChild(cell);
    }
    table.appendChild(bookRow);
  });
  booksDisplay.appendChild(table);
  // table.setAttribute("border", "2");
}

// Add new book button
function addBookPopup() {
  popupWindow.classList.add('new-window');

  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'title');
  nameInput.setAttribute('id', 'title');
  nameInput.setAttribute('placeholder', 'Title');
  nameInput.setAttribute('required', '');
  popupWindow.appendChild(nameInput);

  const authorInput = document.createElement('input')
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('name', 'author');
  authorInput.setAttribute('id', 'author');
  authorInput.setAttribute('placeholder', 'Author');
  authorInput.setAttribute('required', '');
  popupWindow.appendChild(authorInput);

  const pagesInput = document.createElement('input')
  pagesInput.setAttribute('type', 'number');
  pagesInput.setAttribute('name', 'pages');
  pagesInput.setAttribute('id', 'pages');
  pagesInput.setAttribute('placeholder', 'Pages');
  pagesInput.setAttribute('required', '');
  popupWindow.appendChild(pagesInput);

  // Read/Unread/Ongoing button
  const statusInput = document.createElement('select')
  statusInput.setAttribute('name', 'status');
  statusInput.setAttribute('id', 'new-status');
  let statuses = ['Read', 'Unread', 'Ongoing']
  statuses.forEach(item => {
    let option = document.createElement('option');
    option.value = item;
    statusInput.appendChild(option);
    option.innerText = item;
  })
  popupWindow.appendChild(statusInput);
  
  var submitButton = document.createElement('button')
  submitButton.innerText = 'Submit';
  submitButton.addEventListener('click', submitBook);
  popupWindow.appendChild(submitButton);
  
  mainDisplay.appendChild(popupWindow);
}

function submitBook() {
  addBookToLibrary();
  table.innerHTML = ''
  displayBooks();
  popupWindow.innerHTML ='';
  mainDisplay.removeChild(popupWindow);
}

const button = document.getElementById('new-book');
button.addEventListener('click', addBookPopup)

displayBooks();
// console.log('Testing bananas');
