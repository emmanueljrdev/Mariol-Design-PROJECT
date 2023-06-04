import { createNotification } from "../components/notification.js";


const form = document.querySelector('#form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputNumber = document.querySelector('#input-number');
const inputPassword = document.querySelector('#input-password');
const inputConfirm = document.querySelector('#input-confirm');


const validation = (input, regex) => {
  const check = input.parentElement.parentElement.children[1].children[0];
  const wrong = input.parentElement.parentElement.children[1].children[1];

  

  if (input.value === '') {
    check.classList.add('hidden');
    wrong.classList.add('hidden');

  } else if (regex) {
    check.classList.remove('hidden');
    wrong.classList.add('hidden');
    
  } else if (!regex) {
    check.classList.add('hidden');
    wrong.classList.remove('hidden');
  }

}

// Name Regex

const NAME_REGEX = /^[A-Z][a-zA-ZÀÿ\u00f1\u00d1]+(\s*[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)$/;

// Email Regex

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// Number Regex 

const NUMBER_REGEX = /^[4]{1}[1-2]{1}[246]{1}-[0-9]{7}$/;


// Password Regex

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

let nameValidation = false;
let emailValidation = false;
let numberValidation = false;
let passwordValidation = false;
let confirmValidation = false;

inputName.addEventListener('input', e => {
    nameValidation = NAME_REGEX.test(e.target.value);
    validation(inputName, nameValidation);
});

inputEmail.addEventListener('input', e => {
    emailValidation = EMAIL_REGEX.test(e.target.value);
    validation(inputEmail, emailValidation);
 
});

inputNumber.addEventListener('input', e => {
    numberValidation = NUMBER_REGEX.test(e.target.value);
    validation(inputNumber, numberValidation);
});
  
inputPassword.addEventListener('input', e => {
    passwordValidation = PASSWORD_REGEX.test(e.target.value);
    confirmValidation = e.target.value === inputConfirm.value;
    validation(inputPassword, passwordValidation);
    validation(inputConfirm, confirmValidation);
});
  
inputConfirm.addEventListener('input', e => {
    passwordValidation = PASSWORD_REGEX.test(e.target.value);
    confirmValidation = inputPassword.value === e.target.value;
    validation(inputConfirm, confirmValidation);
});


form.addEventListener('submit', async e => {
    

    try {
      e.preventDefault();
      // if (!nameValidation || !emailValidation || !passwordValidation || !confirmValidation) {
      //   return
      // }
      
      const newUser = {
        name: inputName.value,
        email: inputEmail.value,
        number: inputNumber.value,
        password: inputPassword.value,
      }; 
      
      const { data } = await axios.post('/api/users', newUser);

      inputName.value = '';
      inputEmail.value = '';
      inputNumber.value = '';
      inputPassword.value = '';
      inputConfirm.value = '';

      createNotification(false, 'Usuario creado con éxito');
      setTimeout(() => {
        document.querySelector('.notification-active').remove();
        window.location.pathname = '/login';
      }, 1500)

    } catch (error) {
      createNotification(true, error.response.data.error);
      setTimeout(() => {
        document.querySelector('.notification-active').remove();
      }, 3000)
    }
})