const body = document.querySelector('body');

const navBar = document.querySelector('#navbar');

const createNavHome = () => {

  navBar.innerHTML = 
  `
  <div class="max-w-7xl h-full mx-auto flex items-center justify-center lg:justify-between md:gap-20  relative px-4">

      <!-- Mobile svg -->

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 absolute left-5 text-white lg:hidden">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
      
      <a href="#home" class="cursor-pointer">
        <img src="/images/gatito chiquito.svg" alt="" class="h-16">
      </a>

      <!-- Desktop -->

      <div class="gap-8 hidden lg:flex text-sm  text-white">
        <a class="opacity-50 p-2 rounded-lg font-semibold hover:opacity-100 hover:-translate-y-1 transition-transform ease-in-out duration-300" href="#home">Home</a>
        <a class="p-2 rounded-lg font-semibold transition-transform hover:scale-125" href="#about-us">Sobre nosotros</a>
        <a class="p-2 rounded-lg font-semibold transition-transform  hover:scale-125" href="#services">Servicios</a>
        <a class="p-2 rounded-lg font-semibold transition-transform  hover:scale-125" href="#projects">Proyectos</a>
        <a class="p-2 rounded-lg font-semibold transition-transform  hover:scale-125" href="">Contacto</a>
      </div>

      <div class="hidden lg:flex gap-2 text-sm">
        <a href="/signup" class="bg-pink-500 hover:bg-pink-400 p-2 rounded-md text-white font-bold text-center">Registrarse</a>
        <a href="/login" class="p-2 rounded-md hover:text-zinc-200 text-white font-bold text-center">Iniciar Sesión</a>
      </div>

      <!-- Mobile -->

      <div class="fixed md:-top-24 top-20 bg-neutral-900 -left-60 md:left-0 md:right-0 bottom-0 md:bottom-auto flex flex-col md:flex-row p-12 md:gap-8 md:h-20 md:items-center md:justify-center ease-in-out duration-300 z-20 lg:hidden">
    
      <div class="gap-4 flex flex-col md:flex-row md:text-sm lg:text-base text-white">
        <a class="opacity-50 p-2 rounded-lg font-semibold hover:opacity-100 hover:-translate-y-1 transition-transform ease-in-out duration-300" href="#home">Home</a>
        <a class="p-2 rounded-lg font-semibold transition-transform hover:scale-125" href="#about-us">Sobre nosotros</a>
        <a class="p-2 rounded-lg font-semibold transition-transform  hover:scale-125" href="#services">Servicios</a>
        <a class="p-2 rounded-lg font-semibold transition-transform  hover:scale-125" href="#projects">Proyectos</a>
        <a class="p-2 rounded-lg font-semibold transition-transform  hover:scale-125" href="">Contacto</a>
      </div>
  
      <div class="flex flex-col md:flex-row gap-2 md:text-sm">
        <a href="/signup" class="bg-pink-500 hover:bg-pink-400 p-2 rounded-md text-white font-bold w-32 text-center">Registrarse</a>
        <a href="/login" class="p-2 rounded-md hover:text-zinc-200 text-white font-bold w-32 text-center">Iniciar Sesión</a>
      </div>
    </div>

    </div>
  `;

};


const createNavSignup = () => {

  navBar.innerHTML = 
  `
  <div class="max-w-7xl h-full mx-auto flex items-center justify-center lg:justify-between md:gap-20  relative px-4">

      <!-- Mobile svg -->

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 absolute left-5 text-white lg:hidden">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
      
      <a href="/" class="cursor-pointer">
        <img src="/images/gatito chiquito.svg" alt="" class="h-16">
      </a>

      <!-- Desktop -->



      <div class="hidden lg:flex gap-2 text-sm">
      <a class="p-2 rounded-lg font-semibold hover:opacity-100 hover:-translate-y-1 transition-transform ease-in-out duration-300" href="/">Ir al inicio</a>
        <a href="/login" class="p-2 hover:text-zinc-200 rounded-md text-white font-bold text-center">Iniciar Sesión</a>
      </div>

      <!-- Mobile -->

      <div class="fixed md:-top-24 top-20 bg-neutral-900 -left-60 md:left-0 md:right-0 bottom-0 md:bottom-auto flex flex-col md:flex-row p-12 md:gap-8 md:h-20 md:items-center md:justify-center ease-in-out duration-300 z-20 lg:hidden">
    
      
  
      <div class="flex flex-col md:flex-row gap-2 md:text-sm">
      <a class="p-2 rounded-lg font-semibold hover:opacity-100 hover:-translate-y-1 transition-transform ease-in-out duration-300" href="/">Ir al inicio</a>
      <a href="/login" class="p-2 hover:text-zinc-200 rounded-md text-white font-bold text-center">Iniciar Sesión</a>
      </div>
    </div>

    </div>
  `;

};

const createNavLogin = () => {

  navBar.innerHTML = 
  `
  <div class="max-w-7xl h-full mx-auto flex items-center justify-center lg:justify-between md:gap-20  relative px-4">

      <!-- Mobile svg -->

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 absolute left-5 text-white lg:hidden">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
      
      <a href="/" class="cursor-pointer">
        <img src="/images/gatito chiquito.svg" alt="" class="h-16">
      </a>

      <!-- Desktop -->



      <div class="hidden lg:flex gap-4 text-sm">
      <a class="p-2 rounded-lg font-semibold hover:opacity-100 hover:-translate-y-1 transition-transform ease-in-out duration-300" href="/">Ir al inicio</a>
        <a href="/signup" class="p-2 bg-pink-500 hover:bg-pink-400 rounded-md text-white font-bold text-center">Registrarse</a>
      </div>

      <!-- Mobile -->

      <div class="fixed md:-top-24 top-20 bg-neutral-900 -left-60 md:left-0 md:right-0 bottom-0 md:bottom-auto flex flex-col md:flex-row p-12 md:gap-8 md:h-20 md:items-center md:justify-center ease-in-out duration-300 z-20 lg:hidden">
    
      
  
      <div class="flex flex-col md:flex-row gap-2 md:text-sm">
      <a class="p-2 rounded-lg font-semibold hover:opacity-100 hover:-translate-y-1 transition-transform ease-in-out duration-300" href="/">Ir al inicio</a>
        <a href="/signup" class="p-2 bg-pink-500 hover:bg-pink-400 rounded-md text-white font-bold w-32 text-center">Registrarse</a>
      </div>
    </div>

    </div>
  `;

};




if (window.location.pathname === '/') {
    createNavHome();

    const navBtn = navBar.children[0].children[0];

    const navMobile = navBar.children[0].children[4];

    const backdropMobile = document.querySelector('#backdrop-mobile');

    navBtn.addEventListener('click', e => {
      
      if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        navBtn.innerHTML = 
      `
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />

      `;

      navMobile.classList.add('left-0');
      navMobile.classList.add('md:top-20');
      backdropMobile.classList.remove('hidden');

      } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = 
      `
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />

      `;

      navMobile.classList.remove('left-0');
      navMobile.classList.remove('md:top-20');
      backdropMobile.classList.add('hidden');

      }
    });
} else if (window.location.pathname === '/signup/'){
    createNavSignup();

    const navBtn = navBar.children[0].children[0];

    const navMobile = navBar.children[0].children[3];

    const backdropMobile = document.querySelector('#backdrop-mobile');

    navBtn.addEventListener('click', e => {
      
      if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        navBtn.innerHTML = 
      `
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />

      `;

      navMobile.classList.add('left-0');
      navMobile.classList.add('md:top-20');
      backdropMobile.classList.remove('hidden');

      } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = 
      `
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />

      `;

      navMobile.classList.remove('left-0');
      navMobile.classList.remove('md:top-20');
      backdropMobile.classList.add('hidden');

      }
    });
} else if (window.location.pathname === '/login/'){
    createNavLogin();

    const navBtn = navBar.children[0].children[0];

    const navMobile = navBar.children[0].children[3];

    const backdropMobile = document.querySelector('#backdrop-mobile');

    navBtn.addEventListener('click', e => {
      
      if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        navBtn.innerHTML = 
      `
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />

      `;

      navMobile.classList.add('left-0');
      navMobile.classList.add('md:top-20');
      backdropMobile.classList.remove('hidden');

      } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = 
      `
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />

      `;

      navMobile.classList.remove('left-0');
      navMobile.classList.remove('md:top-20');
      backdropMobile.classList.add('hidden');

      }
    });
} 









