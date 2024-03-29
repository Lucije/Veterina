// password check
const password = 'MistrLister';

let valueFromStorage = localStorage.getItem('password');
if (valueFromStorage === password) {
  window.location.href = './html/veterina.html'
}

const passwordInput = document.querySelector('#password');
const passwordInvalid = document.querySelector('.password--invalid');

const passwordBtn = document.querySelector('#password-btn');
passwordBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (passwordInput.value === password) {
    window.location.href = './html/veterina.html';
    localStorage.setItem('password', passwordInput.value);
  } else {
    passwordInvalid.style.visibility = 'visible';
  }
})