const myLibrary = []

function Book(name,author,number){
  this.name = name
  this.author = author
  this.number = number
}
function addBookToArr(name,author,number){
  const book = new Book(name,author,number)
  myLibrary.push(book)
  console.log(book.name , book.author , book.number)
  console.log(myLibrary)
}


const addBook = document.querySelector('.btn-of-add')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
const submit = document.querySelector('.submit')
const grid = document.querySelector('.grid')

const nameInput = document.getElementById('name')
const authorInput = document.getElementById('author')
const numberInput = document.getElementById('number')

const readBtnOnFun = document.createElement('button')
const removeBtnOnFun = document.createElement('button')

readBtnOnFun.addEventListener('click',function(){
  if(readBtnOnFun.style.backgroundColor='#7ae582'){
    readBtnOnFun.style.backgroundColor ='#ff8fab'
    readBtnOnFun.textContent = 'Not read'
  }
})


addBook.addEventListener('click',function(){
  popup.style.display = 'flex'
})

close.addEventListener('click',function(){
  popup.style.display = 'none'
})

submit.addEventListener('click',addBookToLibrary);


function addBookToLibrary(){
  //create parent grid
  const box = document.createElement('div')
  box.className = 'box'
  grid.appendChild(box)
  //create name
  const name = document.createElement('p')
  name.className = 'name'
  name.textContent = nameInput.value
  box.appendChild(name)
  //create name
  const author = document.createElement('p')
  author.className = 'author'
  author.textContent = authorInput.value
  box.appendChild(author)
  //create name
  const number = document.createElement('p')
  number.className = 'number'
  number.textContent = numberInput.value
  box.appendChild(number)
  //create btn read
  readBtnOnFun.className = 'read-or-not'
  readBtnOnFun.textContent = 'Read'
  box.appendChild(readBtnOnFun)
  //create btn remove
  removeBtnOnFun.className = 'remove-box'
  removeBtnOnFun.textContent = 'Remove'
  box.appendChild(removeBtnOnFun)
  //close box
  popup.style.display = 'none'
}

