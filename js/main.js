const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// Day One
//постоянные
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

// переменные
let login = localStorage.getItem('foodDelivery');


function toggleModalAuth () {
  modalAuth.classList.toggle('is-open');
}
function logOut() {
  login = null;
  localStorage.removeItem('foodDelivery');
  buttonAuth.style.display = '';
  userName.style.display = '';
  buttonOut.style.display = '';
  buttonOut.removeEventListener('click', logOut)
  checkAuth();
}


function autorized() {
  console.log('Авторизован');
  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonOut.addEventListener('click', logOut)
}

function notAutorized() {
  console.log('Не авторизован');
      function logIn(event) {
        event.preventDefault();
        login = loginInput.value;

/*
        if(loginInput.value.trim){

          login = loginInput.value;
          localStorage.setItem('foodDelivery', login);
          //toggleModalAuth();
          buttonAuth.removeEventListener('click', toggleModalAuth);
          closeAuth.removeEventListener('click', toggleModalAuth);
          logInForm.removeEventListener('submit', logIn);
          logInForm.reset();
          checkAuth();
        } else{
          loginInput.style.borderColor = 'red';
        }
*/

        localStorage.setItem('foodDelivery', login)

        if (login) {
          loginInput.value = '';
          toggleModalAuth();
          loginInput.style.backgroundColor = ('inherit');
        }
        else {
          loginInput.style.backgroundColor = ('red');
          //alert('Не введен логин');
        }


        buttonAuth.removeEventListener('click', toggleModalAuth);
        closeAuth.removeEventListener('click', toggleModalAuth);
        logInForm.removeEventListener('submit', logIn);

        logInForm.reset();
        checkAuth();
      }
      buttonAuth.addEventListener('click', toggleModalAuth);
      closeAuth.addEventListener('click', toggleModalAuth);
      logInForm.addEventListener('submit', logIn);
}
function checkAuth() {
  if (login) {
  autorized();
}
  else {
    notAutorized();
  }
}

checkAuth();
