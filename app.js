const input = document.querySelectorAll('input[type=checkbox],input[type=text],input[type=email],textarea');
const button = document.querySelector('button');
const secondRadio = document.querySelector('#support-request');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
const successWindows = document.querySelector('.success-container');
let checker = false;

button.addEventListener('click', function (e) {
    e.preventDefault();
    radioCheck();
    input.forEach(inp => {
        check(inp);
        if (inp.type === 'email') {
            emailCheck(inp);
        }
    })
    if (checker) {
        successWindows.classList.remove('hidden');
    }
})


function check(el) {
    if ((el.value === '') || (el.type === 'checkbox' && !el.checked)) {
        el.nextElementSibling.classList.remove('hidden');
        el.style.border = '1px solid red';
        checker = false;
    } else {
        el.nextElementSibling.classList.add('hidden');
        el.style.border = '1px solid green';
    }
}

function emailCheck(el) {
    if (el.value.length !== 0 && (!emailPattern.test(el.value))) {
        el.nextElementSibling.classList.remove('hidden');
        el.nextElementSibling.textContent = 'Please enter a valid email address';
        el.style.border = '1px solid red';
        checker = false;
    } else {
        el.nextElementSibling.textContent = 'This field is required';
    }

}

function radioCheck() {
    if ((document.querySelector('#gen-enquiry').checked) || (document.querySelector('#support-request').checked)) {
        document.querySelector('#gen-enquiry').parentElement.parentElement.nextElementSibling.classList.add('hidden');
        checker = true;
    } else {
        document.querySelector('#gen-enquiry').parentElement.parentElement.nextElementSibling.classList.remove('hidden');
        checker = false;
    }
}

