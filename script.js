let books = [];

function displayBooks() {
  const table = document.getElementById('bookTable');
  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  `;
  
  books.forEach((book, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>
      </td>
    `;
  });
}

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('author').value;
  
  if (title && author) {
    books.push({ title, author });
    displayBooks();
    
    // Clear input fields
    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
  }
}

function editBook(index) {
  const newTitle = prompt('Enter new title:', books[index].title);
  const newAuthor = prompt('Enter new author:', books[index].author);
  
  if (newTitle && newAuthor) {
    books[index].title = newTitle;
    books[index].author = newAuthor;
    displayBooks();
  }
}

function deleteBook(index) {
  books.splice(index, 1);  
  displayBooks();
}

function sortBooks() {
  const sortOption = document.getElementById('sortOption').value;
  if (sortOption === 'title') {
    books.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === 'author') {
    books.sort((a, b) => a.author.localeCompare(b.author));
  }
  displayBooks();
}

displayBooks();

  