let pw = document.querySelector('#pw');
let message = document.querySelector('#message');
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let pwDigit = document.querySelector('#digit');
let pwLength = document.querySelector('#char-length');

pw.addEventListener('focus', ()=> {
    message.style.display ='block';
});

pw.addEventListener('focusout', ()=> {
    message.style.display = 'none';
})