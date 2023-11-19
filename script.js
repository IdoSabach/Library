// FACTORY FUNCTION
function main() {
  const myLibrary = [];

  function createBoxBook(book) {
    const box = document.createElement("div");
    box.className = "box";

    const name = document.createElement("p");
    name.className = "name";
    name.textContent = book.name;
    box.appendChild(name);

    const author = document.createElement("p");
    author.className = "author";
    author.textContent = book.author;
    box.appendChild(author);

    const number = document.createElement("p");
    number.className = "number";
    number.textContent = book.id;
    box.appendChild(number);

    const readBtnOnFun = document.createElement("button");
    readBtnOnFun.className = "read-or-not";
    readBtnOnFun.textContent = "Read";
    box.appendChild(readBtnOnFun);

    if (book.readOrNot === false) {
      readBtnOnFun.textContent = "Not Read";
      readBtnOnFun.style.backgroundColor = "#e04f63";
    } else {
      readBtnOnFun.textContent = "Read";
      readBtnOnFun.style.backgroundColor = "#63da63";
    }

    let readOrNot = true;
    readBtnOnFun.addEventListener("click", () => {
      if (!readOrNot) {
        readBtnOnFun.style.backgroundColor = "#e04f63";
        readBtnOnFun.textContent = "Not Read";
      } else {
        readBtnOnFun.style.backgroundColor = "#63da63";
        readBtnOnFun.textContent = "Read";
      }
      readOrNot = !readOrNot;
    });

    const removeBtnOnFun = document.createElement("button");
    removeBtnOnFun.className = "remove-box";
    removeBtnOnFun.textContent = "Remove";
    box.appendChild(removeBtnOnFun);

    removeBtnOnFun.addEventListener("click", function () {
      const bookIndex = myLibrary.findIndex((item) => item.id === book.id);

      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        grid.removeChild(box);
      }
    });

    return box;
  }

  function addBookToArr(book) {
    myLibrary.push(book);
    const bookElement = createBoxBook(book);
    grid.appendChild(bookElement);
    console.log(myLibrary);
  }

  const addBook = document.querySelector(".btn-of-add");
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".close");
  const grid = document.querySelector(".grid");
  const form = document.querySelector(".add-book-form");
  const checkbox = document.querySelector(".checkbox");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formDate = new FormData(form);

    let book = new Book(
      formDate.get("name"),
      formDate.get("author"),
      formDate.get("number"),
      checkbox.checked
    );

    addBookToArr(book);
    form.reset();
    popup.style.display = "none";
  });

  addBook.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  close.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

//IIFE
const runMain = (function () {
  main();
})();

class Book {
  constructor(name, author, number, readOrNot) {
    this.name = name;
    this.author = author;
    this.number = number;
    this.readOrNot = readOrNot;
    this.id = ++Book.id;
  }

  static id = 0;

  addNum() {
    id += 1;
  }

  // get name() {
  //   return this._name;
  // }

  // set name(value) {
  //   this._name = value;
  // }

  // get author() {
  //   return this._author;
  // }

  // set author(value) {
  //   this._author = value;
  // }

  // get number() {
  //   return this._number;
  // }

  // set number(value) {
  //   this._number = value;
  // }

  // get readOrNot() {
  //   return this._readOrNot;
  // }

  // set readOrNot(value) {
  //   this._readOrNot = value;
  // }

  
}
