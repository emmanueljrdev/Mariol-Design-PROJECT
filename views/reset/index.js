const form = document.querySelector('#form');
const responseDiv = document.querySelector('#res-div');


const emailInput = document.querySelector('#email-input');

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    await axios.post('/api/reset', { email: emailInput.value });
    responseDiv.classList.remove('hidden');
    form.classList.add('hidden');

    setTimeout(() => {
      window.location.pathname = '/login';
    }, 2000);

  } catch (error) {
    console.log(error);
  }
});