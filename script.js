const myLibrary = [];

let bookId = 0;

function Book(name, author, number, readOrNot) {
  this.id = bookId++;
  this.name = name;
  this.author = author;
  this.number = number;
  this.readOrNot = readOrNot;
}
function addBookToArr() {
  if (
    nameInput.value === "" ||
    authorInput.value === "" ||
    numberInput.value === ""
  ) {
    return;
  } else {
    const book = new Book(
      nameInput.value,
      authorInput.value,
      numberInput.value,
      readOrNot.checked
    );
    myLibrary.push(book);
    // console.log(myLibrary)
    //create parent grid
    const box = document.createElement("div");
    box.className = "box";
    grid.appendChild(box);

    //create name
    const name = document.createElement("p");
    name.className = "name";
    name.textContent = book.name;
    box.appendChild(name);

    //create author
    const author = document.createElement("p");
    author.className = "author";
    author.textContent = book.author;
    box.appendChild(author);

    //create number
    const number = document.createElement("p");
    number.className = "number";
    number.textContent = book.number;
    box.appendChild(number);

    //create btn read
    const readBtnOnFun = document.createElement("button");
    readBtnOnFun.className = "read-or-not";
    readBtnOnFun.textContent = "Read";
    box.appendChild(readBtnOnFun);

    // if(readOrNot.checked===false){
    //   readBtnOnFun.style.backgroundColor = "#ff8fab";
    // }

    readOrNot.addEventListener("change", function () {
      if (!readOrNot.checked) {
        readBtnOnFun.style.backgroundColor = "#ff8fab";
      } else {
        readBtnOnFun.style.backgroundColor = "#7ae582";
      }
    });

    //create btn remove
    const removeBtnOnFun = document.createElement("button");
    removeBtnOnFun.className = "remove-box";
    removeBtnOnFun.textContent = "Remove";
    box.appendChild(removeBtnOnFun);

    removeBtnOnFun.setAttribute("data-book-id", book.id);

    removeBtnOnFun.addEventListener("click", function (e) {
      const bookIdToRemove = parseInt(
        e.target.getAttribute("data-book-id"),
        10
      );
      const bookIndex = myLibrary.findIndex(
        (book) => book.id === bookIdToRemove
      );

      if (bookIndex !== -1) {
        grid.removeChild(box);
        myLibrary.splice(bookIndex, 1);
        // console.log(book.id)
        // console.log(bookId)
      }
    });

    console.log(book.name, book.author, book.number);
    console.log(myLibrary);

    nameInput.value = "";
    authorInput.value = "";
    numberInput.value = "";
    readOrNot.checked = false;

    popup.style.display = "none";
  }
}

const addBook = document.querySelector(".btn-of-add");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const grid = document.querySelector(".grid");
// const form = document.querySelector('.add-book-form').reset()
const nameInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const numberInput = document.getElementById("number");
const readOrNot = document.querySelector(".checkbox");
const form = document.querySelector('.add-book-form')

form.addEventListener('submit' , (e)=>{
  e.preventDefault()
  const formDate = new FormData(form);

  // for(item of formDate){
  //   console.log(item[0],item[1])
  // }
  addBookToArr();
})

addBook.addEventListener("click", function () {
  popup.style.display = "flex";
});

close.addEventListener("click", function () {
  popup.style.display = "none";
});

// submit.addEventListener("click", function (event) {
//   event.preventDefault();
//   addBookToArr();
// });

// submit.addEventListener("click", addBookToArr);
