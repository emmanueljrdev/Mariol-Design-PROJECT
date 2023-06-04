
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const appPrev = document.querySelector('.app-prev');
const nextBtn = document.querySelector('.carousel-next');
const pmBtn = document.querySelector('.carousel-next-pm');
const tBtn = document.querySelector('.carousel-next-t');

const b1 = document.querySelector('#b-1');
const b2 = document.querySelector('#b-2');
const b3 = document.querySelector('#b-3');

let currentIndex = 0;

// Mostrar la primera diapositiva
// carouselItems[currentIndex].classList.add('block');
// carouselItems[currentIndex].classList.remove('hidden');

// Ocultar el botón "Anterior" al inicio
if (currentIndex === 0) {
  prevBtn.classList.add('hidden');
  appPrev.classList.remove('hidden');
  ;
} 

// Función para mostrar la diapositiva anterior
const showPrev = () => {
  // carouselItems[currentIndex].classList.remove('block');
  // carouselItems[currentIndex].classList.add('hidden');


  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  // carouselItems[currentIndex].classList.add('block');
  // carouselItems[currentIndex].classList.remove('hidden');

  // Mostrar el botón "Siguiente" si se encuentra en el final
  if (currentIndex === carouselItems.length - 2) {
  }

  if (currentIndex === 1) {
    b3.classList.remove('bg-pink-500');
    b2.classList.add('bg-pink-500');
  }
  // Ocultar el botón "Anterior" si se encuentra en el inicio
  if (currentIndex === 0) {
    prevBtn.classList.add('hidden');
    appPrev.classList.remove('hidden');
    b1.classList.add('bg-pink-500');
    b2.classList.remove('bg-pink-500');
  } 
  console.log(currentIndex);
  console.log(carouselItems[currentIndex]);

  carouselItems[currentIndex].scrollIntoView();

}

// Función para mostrar la diapositiva siguiente
const showNext = () => {
  // carouselItems[currentIndex].classList.remove('block');
  // carouselItems[currentIndex].classList.add('hidden');

  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = carouselItems.length - 1;
  }
  // carouselItems[currentIndex].classList.add('block');
  // carouselItems[currentIndex].classList.remove('hidden');
  // Mostrar el botón "Anterior" si no se encuentra en el inicio
  if (currentIndex === 1) {
    appPrev.classList.add('hidden');
    prevBtn.classList.remove('hidden');
    b1.classList.remove('bg-pink-500');
    b2.classList.add('bg-pink-500');
  }

  if (currentIndex === 2) {
    b2.classList.remove('bg-pink-500');
    b3.classList.add('bg-pink-500');
  }
  // Ocultar el botón "Siguiente" si se encuentra en el final

  if (currentIndex === carouselItems.length - 1) {
  }
  console.log(currentIndex);

  console.log(carouselItems[currentIndex]);

  carouselItems[currentIndex].scrollIntoView();


  }

  appPrev.addEventListener('click', e => {

    window.history.back();

  })
  
  

  
  // Agregar el evento "click" a los botones de navegación
  prevBtn.addEventListener('click', showPrev);

  const tDiv = document.querySelector('#t');
  const pmDiv = document.querySelector('#pm');

  

  


  const opcionesSecundarias = document.querySelector('#opciones-secundarias');
  const selector = document.querySelector('#selector');
  const designSelector = document.querySelector('#design-selector');
  const writingSelector = document.querySelector('#writing-selector');
  const webPageSelector = document.querySelector('#web-page-selector');
  const designDiv = document.querySelector('#design-container');
  const writingDiv = document.querySelector('#writing-container');
  const webPageDiv = document.querySelector('#web-page-container');

  console.log();



  selector.addEventListener('change', async () => {
    const opcionSeleccionada = selector.value;
    if (opcionSeleccionada === 'Diseño Web') {
      designSelector.classList.remove('hidden');
      writingSelector.classList.add('hidden');
      webPageSelector.classList.add('hidden');
      opcionesSecundarias.children[0].classList.remove('hidden');
      opcionesSecundarias.children[1].classList.add('hidden');
      opcionesSecundarias.children[2].classList.add('hidden');
    } else if (opcionSeleccionada === 'Redacción Web') {
      writingSelector.classList.remove('hidden');
      designSelector.classList.add('hidden');
      webPageSelector.classList.add('hidden');
      opcionesSecundarias.children[1].classList.remove('hidden');
      opcionesSecundarias.children[0].classList.add('hidden');
      opcionesSecundarias.children[2].classList.add('hidden');

    } else if (opcionSeleccionada === 'Páginas Web') {
        webPageSelector.classList.remove('hidden');
        writingSelector.classList.add('hidden');
        designSelector.classList.add('hidden');
        opcionesSecundarias.children[2].classList.remove('hidden');
        opcionesSecundarias.children[0].classList.add('hidden');
        opcionesSecundarias.children[1].classList.add('hidden');
        
    } else {
      opcionesSecundarias.classList.add('hidden');
      }
  });

  const servicioSelect = (selector, option) => {
    const optionSelected = selector.value;

    if (optionSelected === 'Paquete básico') {
      option.parentElement.classList.remove('hidden');
      option.children[0].classList.remove('hidden');
      option.children[1].classList.add('hidden');
      option.children[2].classList.add('hidden');
      console.log('funciono');
    } else if (optionSelected === 'Paquete mediano') {
      option.parentElement.classList.remove('hidden');
      option.children[0].classList.add('hidden');
      option.children[1].classList.remove('hidden');
      option.children[2].classList.add('hidden');
    } else if (optionSelected === 'Paquete premium') {
      option.parentElement.classList.remove('hidden');
      option.children[0].classList.add('hidden');
      option.children[1].classList.add('hidden');
      option.children[2].classList.remove('hidden');
    } else {
      option.parentElement.classList.remove('hidden');
      option.children[0].classList.add('hidden');
      option.children[1].classList.add('hidden');
      option.children[2].classList.add('hidden');
    }

  };

  designSelector.addEventListener('change', () => {
    const designDiv = document.querySelector('#design-container');
    servicioSelect(designSelector, designDiv);
  });

  writingSelector.addEventListener('change', () => {
    const writingDiv = document.querySelector('#writing-container');
    servicioSelect(writingSelector, writingDiv);
  });

  webPageSelector.addEventListener('change', () => {
    const webPageDiv = document.querySelector('#web-page-container');
    servicioSelect(webPageSelector, webPageDiv);
  });

  const formPm = document.querySelector('#ref-form-pm');
  const formT = document.querySelector('#ref-form-t');

  const inputPm = document.querySelector('#ref-input-pm');
  const inputT = document.querySelector('#ref-input-t');
  

let numberRefValidation = false;
const NUMBER_REGEX = /\d{4,}/;

tBtn.addEventListener('click', e => {

  if (e.target.id === 'transferencia' || e.target.classList.contains('t-svg')) {

    pmDiv.classList.add('hidden');
    tDiv.classList.remove('hidden');

    showNext();
  }

});

pmBtn.addEventListener('click', async e => {


    if (e.target.id === 'pago-movil' || e.target.classList.contains('pm-svg')) {
   
      pmDiv.classList.remove('hidden');
      tDiv.classList.add('hidden');

      
      

      // const { data: servicio } = await axios.post('api/main-app', { service: }); 

      showNext();
    
    


    
  }
    
  

  

});


  inputPm.addEventListener('input', e => {

    numberRefValidation = NUMBER_REGEX.test(e.target.value);

    if (numberRefValidation) {
      inputPm.parentElement.children[2].removeAttribute('disabled');
    } else {
      inputPm.parentElement.children[2].setAttribute('disabled', '');
    }
  
  });

  inputT.addEventListener('input', e => {

    numberRefValidation = NUMBER_REGEX.test(e.target.value);

    if (numberRefValidation) {
      inputT.parentElement.children[2].removeAttribute('disabled');
    } else {
      inputT.parentElement.children[2].setAttribute('disabled', '');
    }
  
  });



  formPm.addEventListener('submit', async e => {
    e.preventDefault();

    


    if (numberRefValidation) {
      if (selector.value === 'Diseño Web') {
        const { data } = await axios.post('/api/main-app', { typeOfService: selector.value, pack: designSelector.value, payRef: inputPm.value, method: 'PM' });
        showNext();
      } else if (selector.value === 'Redacción Web') {
        const { data } = await axios.post('/api/main-app', { typeOfService: selector.value, pack: writingSelector.value, payRef: inputPm.value, method: 'PM' });
        showNext();
      } else if (selector.value === 'Páginas Web') {
        const { data } = await axios.post('/api/main-app', { typeOfService: selector.value, pack: webPageSelector.value, payRef: inputPm.value, method: 'PM' });
        showNext();
      }
      
      

      // showNext();

      console.log();

      // const { data: info } = await axios.post('api/main-app', { service: , payRef: ref.value, method: 'PM'});
      formPm.reset();
      inputPm.parentElement.children[2].setAttribute('disabled', '');

    }
    
  });

  formT.addEventListener('submit', async e => {
    e.preventDefault();


    if (numberRefValidation) {
      if (selector.value === 'Diseño Web') {
        const { data } = await axios.post('/api/main-app', { typeOfService: selector.value, pack: designSelector.value, payRef: inputPm.value, method: 'T' });
        showNext();
      } else if (selector.value === 'Redacción Web') {
        const { data } = await axios.post('/api/main-app', { typeOfService: selector.value, pack: writingSelector.value, payRef: inputPm.value, method: 'T' });
        showNext();
      } else if (selector.value === 'Páginas Web') {
        const { data } = await axios.post('/api/main-app', { typeOfService: selector.value, pack: webPageSelector.value, payRef: inputPm.value, method: 'T' });
        showNext();
      }
      formT.reset();
      inputT.parentElement.children[2].setAttribute('disabled', '');

    }
    
  });
