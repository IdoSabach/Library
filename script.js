const addBook = document.querySelector('.btn-of-add')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')

addBook.addEventListener('click',function(){
  popup.style.display = 'flex'
})

close.addEventListener('click',function(){
  popup.style.display = 'none'
})