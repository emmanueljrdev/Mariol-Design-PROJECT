// const carouselItems = document.querySelectorAll('.carousel-item');
// const prevBtn = document.querySelector('.carousel-prev');
// const nextBtn = document.querySelector('.carousel-next');

// let currentIndex = 0;

// // Mostrar la primera diapositiva
// carouselItems[currentIndex].classList.add('active');

// // Ocultar el botón "Anterior" al inicio
// if (currentIndex === 0) {
// //   prevBtn.classList.add('hidden');
// }

// // Función para mostrar la diapositiva anterior
// function showPrev() {
//   carouselItems[currentIndex].classList.remove('active');
//   carouselItems[currentIndex].classList.remove('scale-110');
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = 0;
//   }
//   carouselItems[currentIndex].classList.add('active');
//   carouselItems[currentIndex].classList.add('scale-110');

//   // Mostrar el botón "Siguiente" si se encuentra en el final
//   if (currentIndex === carouselItems.length - 2) {
//     // nextBtn.classList.remove('hidden');
//   }
//   // Ocultar el botón "Anterior" si se encuentra en el inicio
//   if (currentIndex === 0) {
//     // prevBtn.classList.add('hidden');
//   }

  
// }

// // Función para mostrar la diapositiva siguiente
// function showNext() {
//   carouselItems[currentIndex].classList.remove('active');
//   carouselItems[currentIndex].classList.remove('scale-110');
//   currentIndex++;

//   if (currentIndex >= carouselItems.length) {
//     currentIndex = carouselItems.length - 1;
//   }

//   carouselItems[currentIndex].classList.add('active');
//   carouselItems[currentIndex].classList.add('scale-110');

//   // Mostrar el botón "Anterior" si no se encuentra en el inicio
//   if (currentIndex === 1) {
//     // prevBtn.classList.remove('hidden');
//   }
//   //// Ocultar el botón "Siguiente" si se encuentra en el final
//     if (currentIndex === carouselItems.length - 1) {
//         // nextBtn.classList.add('hidden');
//         }
    
        
//     }
    
//     // Agregar el evento "click" a los botones de navegación
//     prevBtn.addEventListener('click', showPrev);
//     nextBtn.addEventListener('click', showNext);

const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentIndex = 1;



// Mostrar la primera diapositiva
carouselItems[currentIndex].classList.add('active');
carouselItems[currentIndex].classList.remove('hidden');
carouselItems[currentIndex].classList.add('scale-110');

// Función para mostrar la diapositiva anterior
function showPrev() {
  carouselItems[currentIndex].classList.remove('active');
  carouselItems[currentIndex].classList.add('hidden');
  carouselItems[currentIndex].classList.remove('scale-110');

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  carouselItems[currentIndex].classList.add('active');
  carouselItems[currentIndex].classList.remove('hidden');
  carouselItems[currentIndex].classList.add('scale-110');
}

console.log(carouselItems[currentIndex + 1]);


// Función para mostrar la diapositiva siguiente
function showNext() {
  carouselItems[currentIndex].classList.remove('active');
  carouselItems[currentIndex].classList.add('hidden');
  carouselItems[currentIndex].classList.remove('scale-110');

  currentIndex++;



  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  carouselItems[currentIndex].classList.add('active');
  console.log(currentIndex);


  carouselItems[currentIndex].classList.remove('hidden');
  carouselItems[currentIndex].classList.add('scale-110');

}

// Eventos de clic en los botones de navegación
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);