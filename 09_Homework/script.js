class Book {
  constructor(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
      return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    };
  }
}

const library = [];
let inputDate = prompt('Enter book data separate by ";"');

while (inputDate) {
  
  const [isbn, title, author, year] = inputDate.split(";");
  const book = new Book(isbn, title, author, year);

  let isBookExists = false;
  for (let i = 0; i < library.length; i++) {
    if (library[i].isbn === book.isbn) {
      isBookExists = true;
      console.log(`Такая книга c ISBN ${isbn} уже есть в библиотеке`);
      break;
    }
  }
  if (!isBookExists) {
    library.push(book);
  }
  inputDate = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
  library.forEach((book) => console.log(book.toString()));
}

function findBook(library, isbn) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].isbn.toString() === isbn.toString()) {
      console.log(`Книга с ISBN ${isbn} найдена в библиотеке`);
      console.log(library[i].toString());
      return i;
    }
  }
  console.log(`Книга с ISBN ${isbn} не найдена в библиотеке`);
  return -1;
}

findBook(library, 1);