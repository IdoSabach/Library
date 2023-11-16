// FACTORY FUNCTION
function main(){

const myLibrary = [];

let bookId = 0;

function Book(name, author, number, readOrNot) {
  this.id = bookId++;
  this.name = name;
  this.author = author;
  this.number = number;
  this.readOrNot = readOrNot;
}

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
  number.textContent = book.number;
  box.appendChild(number);

  const readBtnOnFun = document.createElement("button");
  readBtnOnFun.className = "read-or-not";
  readBtnOnFun.textContent = "Read";
  // readBtnOnFun.classList.add('readBtn')
  box.appendChild(readBtnOnFun);

  if (book.readOrNot === false) {
    readBtnOnFun.textContent = "Not Read";
    readBtnOnFun.style.backgroundColor = "#e04f63";
  } else {
    readBtnOnFun.textContent = "Read";
    readBtnOnFun.style.backgroundColor = "#63da63";
  }

  let readOrNot = true
  readBtnOnFun.addEventListener('click',()=>{
      if(!readOrNot){
        readBtnOnFun.style.backgroundColor = "#e04f63"
        readBtnOnFun.textContent ='Not Read'
      }else{
        readBtnOnFun.style.backgroundColor = "#63da63"
        readBtnOnFun.textContent ='Read'
      }
      readOrNot = !readOrNot
    })


  const removeBtnOnFun = document.createElement("button");
  removeBtnOnFun.className = "remove-box";
  removeBtnOnFun.textContent = "Remove";
  box.appendChild(removeBtnOnFun);

  removeBtnOnFun.setAttribute("data-book-id", book.id);

  removeBtnOnFun.addEventListener("click", function (e) {
    const bookIdToRemove = parseInt(e.target.getAttribute("data-book-id"), 10);
    const bookIndex = myLibrary.findIndex((book) => book.id === bookIdToRemove);

    if (bookIndex !== -1) {
      grid.removeChild(box);
      myLibrary.splice(bookIndex, 1);
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

  const book = new Book(
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
const runMain = (function(){
  main()
})()