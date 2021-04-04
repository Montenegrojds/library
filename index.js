const addBooksbutton = document.getElementById('addbook');
const close = document.getElementById('close');
const modelform = document.getElementById('model');
const displayform='--displayform'
addBooksbutton.addEventListener('click',function(){
    document.documentElement.style.setProperty(displayform,'flex');
})

close.addEventListener('click',function(){
    document.documentElement.style.setProperty(displayform,'none');
})

