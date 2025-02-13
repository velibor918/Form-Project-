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
});

pw.addEventListener('keyup', ()=> {
    let lowercaseValue = /[a-z]/g;
    if(pw.value.match(lowercaseValue)){
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove('valid');
        lowercase.classList.add('invalid');
    }

    let uppercaseValue = /[A-Z]/g;
    if(pw.value.match(uppercaseValue)) {
        uppercase.classList.remove('invalid');
        uppercase.classList.add('valid');
    } else {
        uppercase.classList.remove('valid');
        uppercase.classList.add('invalid');
    }

    let digitValue = /[0-9]/g;
    if(pw.value.match(digitValue)) {
        pwDigit.classList.remove('invalid');
        pwDigit.classList.add('valid');
    } else {
        pwDigit.classList.remove('valid');
        pwDigit.classList.add('invalid');
    }

    if(pw.value.length >= 8) {
        pwLength.classList.remove('invalid');
        pwLength.classList.add('valid');
    } else {
        pwLength.classList.remove('valid');
        pwLength.classList.add('invalid');
    }
})

document.querySelector('button').addEventListener('mousedown', (e) => {
    e.preventDefault();
})