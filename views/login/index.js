import { createNotification } from "../components/notification.js";


const form = document.querySelector('#form');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');

form.addEventListener('submit', async e => {
  console.log(inputEmail.value, inputPassword.value);

    try {
      e.preventDefault();
      const credentials = {
        email: inputEmail.value,
        password: inputPassword.value
      };
      const { data } = await axios.post('/api/login', credentials);
      console.log(data);

      // cargar id en la barra de navegacion y llevar a otra pagina
      window.location.pathname = `/app/${data}`;
  
    } catch (error) {
      createNotification(true, error.response.data.error);
      setTimeout(() => {
        document.querySelector('.notification-active').remove();
      }, 3000)
  
    }
  });