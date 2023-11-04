const myLibrary = []

function Book(name,author,number){
  this.name = name
  this.author = author
  this.number = number
}
function addBookToArr(){
  const book = new Book(nameInput.value,authorInput.value,numberInput.value)
  myLibrary.push(book)
  console.log(book.name , book.author , book.number)
  console.log(myLibrary)

  //create parent grid
  const box = document.createElement('div')
  box.className = 'box'
  grid.appendChild(box)

  //create name
  const name = document.createElement('p')
  name.className = 'name'
  name.textContent = book.name
  box.appendChild(name)

  //create author
  const author = document.createElement('p')
  author.className = 'author'
  author.textContent = book.author
  box.appendChild(author)

  //create number
  const number = document.createElement('p')
  number.className = 'number'
  number.textContent = book.number
  box.appendChild(number)

  //create btn read
  const readBtnOnFun = document.createElement('button')
  readBtnOnFun.className = 'read-or-not'
  readBtnOnFun.textContent = 'Read'
  box.appendChild(readBtnOnFun)

  //create btn remove
  const removeBtnOnFun = document.createElement('button')
  removeBtnOnFun.className = 'remove-box'
  removeBtnOnFun.textContent = 'Remove'
  box.appendChild(removeBtnOnFun)
  //close box

  nameInput.value = ''
  authorInput.value = ''
  numberInput.value = ''

  popup.style.display = 'none'
  
}


const addBook = document.querySelector('.btn-of-add')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
const submit = document.querySelector('.submit')
const grid = document.querySelector('.grid')
// const form = document.querySelector('.add-book-form').reset()
const nameInput = document.getElementById('name')
const authorInput = document.getElementById('author')
const numberInput = document.getElementById('number')


addBook.addEventListener('click',function(){
  popup.style.display = 'flex'
})

close.addEventListener('click',function(){
  popup.style.display = 'none'
})

// submit.addEventListener('click',function(event){
//   event.preventDefault()
//   addBookToArr();
// });

submit.addEventListener('click',addBookToArr)



