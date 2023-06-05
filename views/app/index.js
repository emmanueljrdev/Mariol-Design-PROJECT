import { createNotification } from "/components/notification.js";


const navBar = document.querySelector('#nav-bar');
const burger = navBar.children[1].children[0].children[0];
const xMark = navBar.children[1].children[0].children[1]; 
const mobileNav = document.querySelector('#mobile-nav');
const userContainer = document.querySelector('#users-container');
const clientsBtn = document.querySelectorAll('.client');
const adminBtn = document.querySelectorAll('.admin');


const isClient = () => {
  clientsBtn.forEach(element => {
    element.classList.remove('hidden');
  });

  
}; 

const isAdmin = (data) => {
  adminBtn.forEach(element => {
    element.classList.remove('hidden');
  });

  

  

  try {
    // const servicesBtn = document.querySelector('.services-btn')

    // servicesBtn.innerHTML = 
    
    // `
    // 
    // <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    //   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    // </svg>
    
    // `;

    
  
    const usersList = document.createElement('tr');
    usersList.id = data.id;
    usersList.classList.add('flex', 'justify-between', 'py-2', 'border-b', 'border-slate-900/20', 'items-center', 'text-sm', 'sm:text-base');
    usersList.innerHTML = 
      `
      <td class="w-full border-slate-900/20 px-2">${data.name}</td>
      <td class="w-full border-slate-900/20 px-2">${data.email}</td>
      <td class="w-full border-slate-900/20 px-2">${data.number}</td>
      <td class="w-full border-slate-900/20 px-2 flex items-center justify-center gap-2">
        <button class="p-1 rounded-md bg-blue-300 font-bold brief-btn flex items-center gap-2">Briefings</button>
        <button class="p-1 rounded-md bg-green-300 font-bold request-btn flex items-center gap-2">Solicitudes</button>
      </td>


      `;



  userContainer.append(usersList);



  } catch (error) {
    
  }
  
};

(async () => {
  try {


    const { data } = await axios.get('/api/users-app');

    const userCard = document.querySelector('#user-card');

    const userCardName = userCard.children[1].children[0];

    userCardName.innerHTML = 
    
    `
      ${data.name}
    `;


    if (data.admin === false) {
     return isClient();

     
    } else {
      data.forEach(info => {


        if (info.admin === false) {
          isAdmin(info);
          
        }
  
      });
    }

    

    

    const briefBtn = document.querySelectorAll('.brief-btn');

    briefBtn.forEach(element => {
      element.addEventListener('click', async e => {

      
          element.innerHTML = 
          
          `
          Briefings <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          `;
          const briefAdmin = document.querySelector('#brief-admin');
          const briefContainer = document.querySelector('#briefs-container');

      
          const { data: brief } = await axios.get('/api/briefings');
          console.log(e.target.parentElement.parentElement.id);

          briefContainer.innerHTML = '';

      
          brief.forEach(data => {
            if (data.user === e.target.parentElement.parentElement.id) {
              element.innerHTML = `Briefings`
              console.log(data);

              briefAdmin.scrollIntoView();

              
              
              

              console.log(data);
              const briefsList = document.createElement('li');
              briefsList.id = data.id;
              briefsList.classList.add('bg-zinc-700', 'h-[100%]','w-[100%]' ,  'rounded-md', 'shadow-md', 'p-4', 'py-4', 'flex', 'flex-col', 'justify-center', 'brief-data');

              briefsList.innerHTML = 
              
              `
                <div class="flex flex-col gap-4 items-center text-left w-full h-full p-4">
                  <h1 class="text-xl font-bold">Pepito Juan </h1>
                
                  <div class="flex flex-col gap-2">
                    <h1 class=""><span class="font-bold">Requerimiento:</span> ${data.question1}</h1>
                    <h1 class=""><span class="font-bold">Presupuesto:</span> ${data.question2}</h1>
                    <h1 class=""><span class="font-bold">Nombre de la marca:</span> ${data.question3}</h1>
                    <h1 class=""><span class="font-bold">A qué se dedica la marca:</span> ${data.question4}</h1>
                    <h1 class=""><span class="font-bold">Red social:</span> ${data.question5}</h1>
                    <h1 class=""><span class="font-bold">Expectativas:</span> ${data.question6}</h1>

                  </div>


                </div>


              `;

              briefContainer.append(briefsList)


            } else {
              element.innerHTML = `Briefings`
            } 
          });
        



      })
    })

    const requestBtn = document.querySelectorAll('.request-btn');

    requestBtn.forEach(element => {
      element.addEventListener('click', async e => {

        element.innerHTML = 
          
          `
          Solicitudes <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          `;
        

        // element.children[1].classList.toggle('opacity-100');

        const requestAdmin = document.querySelector('#request-admin');
        const requestContainer = document.querySelector('#request-container');




        const { data: services } = await axios.get('/api/services');
        
        requestContainer.innerHTML = '';
        

        services.forEach(data => {
          if (data.user === e.target.parentElement.parentElement.id) {
            element.innerHTML = `Briefings`
            requestAdmin.scrollIntoView();

            if (data.isApproved === false) {
              const requestList = document.createElement('li');
              requestList.id = data.id;
              requestList.classList.add('bg-zinc-700', 'h-[105%]', 'rounded-md', 'shadow-md', 'p-4', 'py-4', 'flex', 'flex-col', 'justify-center', 'brief-data', 'lg:h-[125%]');

              requestList.innerHTML = 
              
              `
              <p>Tipo de servicio: ${data.typeOfService}</p>
              <p>Paquete: ${data.pack}<p>
              <p>Referencia de pago: ${data.payRef}</p>
              <p>Método de pago: ${data.method}</p>
              <p>Estado: <span class="text-red-500 font-bold">No aprobado</span></p>
  
              <div class="flex items-center justify-center gap-4">
                <button id="disapprove" class="bg-orange-400 hover:bg-orange-300 p-1 rounded-md font-bold hidden">Desaprobar</button>
                <button id="approve" class="bg-green-400 hover:bg-green-300 p-1 rounded-md font-bold ">Aprobar</button>
                <button id="reject" class="bg-red-500 hover:bg-red-400 p-1 rounded-md font-bold text-zinc-100">Rechazar</button>
              </div>


              `;

              requestContainer.append(requestList);
            } else if (data.isApproved === true) {
              const requestList = document.createElement('li');
              requestList.id = data.id;
              requestList.classList.add('bg-zinc-700', 'h-[105%]', 'rounded-md', 'shadow-md', 'p-4', 'py-4', 'flex', 'flex-col', 'justify-center', 'brief-data', 'lg:h-[125%]');

              requestList.innerHTML = 
              
              `
              <p>Tipo de servicio: ${data.typeOfService}</p>
              <p>Paquete: ${data.pack}<p>
              <p>Referencia de pago: ${data.payRef}</p>
              <p>Método de pago: ${data.method}</p>
              <p>Estado: <span class="text-green-400 font-bold">Aprobado</span></p>
  
              <div class="flex items-center justify-center gap-4">
                <button id="disapprove" class="bg-orange-400 hover:bg-orange-300 p-1 rounded-md font-bold">Desaprobar</button>
                <button id="approve" class="bg-green-400 hover:bg-green-300 p-1 rounded-md font-bold hidden">Aprobar</button>
                <button id="reject" class="bg-red-500 hover:bg-red-400 p-1 rounded-md font-bold text-zinc-100">Rechazar</button>
              </div>


              `;

              requestContainer.append(requestList);
            }
            
          } else {
            element.innerHTML = `Briefings`
          }
        });

        // services.forEach(data => {
        //   if (data.user === e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id && e.target.innerText === 'Aprobadas') {
        //     if (data.isApproved === true) {
        //       console.log(data);
        //       requestAdmin.scrollIntoView();

        //       const requestList = document.createElement('li');
        //       requestList.id = data.id;
        //       requestList.classList.add('bg-zinc-100', 'h-32', 'w-56', 'lg:h-52', 'lg:w-72', 'rounded-lg', 'shadow-md', 'p-4', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4', 'brief-data');

        //       requestList.innerHTML = 
              
        //       `
        //         <div class="flex flex-col gap-2 text-sm">
        //           <p>Tipo de servicio: ${data.typeOfService}</p>
        //           <p>Paquete: ${data.pack}</p>
        //           <p>Referencia de pago: ${data.payRef}</p>
        //           <p>Método: ${data.method}</p>
        //           <div class="flex justify-evenly">
        //             <button id="approve" class="bg-green-400 hover:bg-green-300 p-1 rounded-md font-bold ">Aprobar</button>
        //             <button id="reject" class="bg-red-500 hover:bg-red-400 p-1 rounded-md font-bold text-zinc-100">Rechazar</button>
        //           </div>
        //         </div>


        //       `;

        //       requestContainer.append(requestList);
        //     } else if (data.isApproved === false) {
        //       console.log(data);
        //       requestAdmin.scrollIntoView();

        //       const requestList = document.createElement('li');
        //       requestList.id = data.id;
        //       requestList.classList.add('bg-zinc-100', 'h-32', 'w-56', 'lg:h-52', 'lg:w-72', 'rounded-lg', 'shadow-md', 'p-4', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4', 'brief-data');

        //       requestList.innerHTML = 
              
        //       `
        //         <div class="flex flex-col gap-2 text-sm">
        //           <p>Tipo de servicio: ${data.typeOfService}</p>
        //           <p>Paquete: ${data.pack}</p>
        //           <p>Referencia de pago: ${data.payRef}</p>
        //           <p>Método: ${data.method}</p>
        //           <div class="flex justify-evenly">
        //             <button id="approve" class="bg-green-400 hover:bg-green-300 p-1 rounded-md font-bold ">Aprobar</button>
        //             <button id="reject" class="bg-red-500 hover:bg-red-400 p-1 rounded-md font-bold text-zinc-100">Rechazar</button>
        //           </div>
        //         </div>


        //       `;

        //       requestContainer.append(requestList);
        //       return
        //     }


        //   }


        // })

        const approveBtn = document.querySelectorAll('#approve');
        const disapproveBtn = document.querySelectorAll('#disapprove');
        const rejectBtn = document.querySelectorAll('#reject');
        
        approveBtn.forEach(element => {
          element.addEventListener('click', async e => {
            console.log(e.target);
            const id = element.parentElement.parentElement.id;
            await axios.patch(`/api/main-app/${id}`, { isApproved: true });
            element.parentElement.parentElement.children[5].children[0].innerText = 'Aprobado';
            element.parentElement.parentElement.children[5].children[0].classList.add('text-green-400');
            element.parentElement.parentElement.children[5].children[0].classList.remove('text-red-500');
            element.parentElement.children[0].classList.remove('hidden');
            element.parentElement.children[1].classList.add('hidden');

          });
        });

        disapproveBtn.forEach(element => {
          element.addEventListener('click', async e => {
            const id = element.parentElement.parentElement.id;
            console.log(element);
            await axios.patch(`/api/main-app/${id}`, { isApproved: false });
            console.log(element.parentElement.parentElement.children[5].children[0]);
            element.parentElement.parentElement.children[5].children[0].innerHTML = 'No aprobado';
            element.parentElement.parentElement.children[5].children[0].classList.add('text-red-500');
            element.parentElement.parentElement.children[5].children[0].classList.remove('text-green-400');
            element.parentElement.children[0].classList.add('hidden');
            element.parentElement.children[1].classList.remove('hidden');
          });
        });

        rejectBtn.forEach(element => {
          element.addEventListener('click', async e => {
            const id = element.parentElement.parentElement.id;
            await axios.delete(`/api/main-app/${id}`);
            element.parentElement.parentElement.remove();
          });
        });

      })
    })

  } catch (error) {
    // adminBtns.forEach(btn => btn.classList.add('buttons-employees'))
    console.log(error);
  }
})();


const myServicesBtn = document.querySelectorAll('#my-services-btn');
    const myServicesContainer = document.querySelector('#myservices-container');

    myServicesBtn.forEach(element => {


      element.addEventListener('click', async e => {
        console.log(e.target);
  
        try {
  
      //     myServicesList.innerHTML = `
          
      //     <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      //     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      // </svg>
  
      //     `
  
          const { data } = await axios.get('/api/services');
        myServicesContainer.innerHTML = '';
  
        data.forEach(data => {
          console.log(data);
          if (data.isApproved === true) {
            console.log(data);
            const myServicesList = document.createElement('tr');
            myServicesList.id = data.id;
            myServicesList.classList.add('flex', 'justify-between', 'py-2', 'border-b', 'border-slate-900/20', 'items-center', 'text-sm', 'sm:text-base');
            myServicesList.innerHTML = 
              `
              <tr class="flex justify-between py-2 border-b border-slate-900/20 items-center">
                <td class="w-full border-slate-900/20 px-2">${data.typeOfService}</td>
                <td class="w-full border-slate-900/20 px-2">${data.pack}</td>
                <td class="w-full border-slate-900/20 px-2 text-green-400 font-bold">Aprobado</td>
              </tr>
  
  
              `;
    
                  myServicesContainer.append(myServicesList);
          }
        })
        } catch (error) {
          
        }
  
        
        
      })

    })


navBar.addEventListener('click', e => {
  const backdrop = document.querySelector('#backdrop-mobile');
    if (e.target.closest('#disable')) {
      if (e.target.classList.contains('burger')) {
        backdrop.classList.remove('hidden');
        navBar.classList.add('w-48');
        navBar.children[1].children[1].classList.add('opacity-100');
        navBar.children[1].children[2].classList.add('opacity-100');
        burger.classList.add('hidden');
        burger.parentElement.classList.add('left-32');
        xMark.classList.remove('hidden');

      } else {
        backdrop.classList.remove('hidden');
        navBar.classList.add('w-48');
        navBar.children[1].children[1].classList.add('opacity-100');
        navBar.children[1].children[2].classList.add('opacity-100');
        burger.classList.add('hidden');
        burger.parentElement.classList.add('left-32');
        xMark.classList.remove('hidden');
      }
    } else if (e.target.closest('#enable')) {
        if (e.target.classList.contains('x-mark')) {
          backdrop.classList.add('hidden');
          navBar.classList.remove('w-48');
          navBar.children[1].children[1].classList.remove('opacity-100');
          navBar.children[1].children[2].classList.remove('opacity-100');
          burger.classList.remove('hidden');
          burger.parentElement.classList.remove('left-32');
          xMark.classList.add('hidden');
        } else {
          backdrop.classList.add('hidden');
          navBar.classList.remove('w-48');
          navBar.children[1].children[1].classList.remove('opacity-100');
          navBar.children[1].children[2].classList.remove('opacity-100');
          burger.classList.remove('hidden');
          burger.parentElement.classList.remove('left-32');
          xMark.classList.add('hidden');
        }
    }
}); 

mobileNav.addEventListener('click', e => {

  const serviceDiv = document.querySelector('#service-btn');
  const serviceArrow = serviceDiv.children[1];

  console.log(serviceArrow);

  if (e.target.closest('#service-btn')) {
    serviceArrow.classList.toggle('-rotate-180');
    serviceDiv.children[0].children[1].classList.toggle('opacity-100');
    serviceDiv.children[0].children[1].classList.toggle('bottom-14');


  }




});

const logOutBtn = document.querySelectorAll('.log-out');
console.log(logOutBtn);

logOutBtn.forEach(element => {

  element.addEventListener('click', async e => {

    await axios.get('/api/logout');
    console.log('funcionó');
    window.location.pathname = '/login';

  });


});




const briefForm = document.querySelector('#price-form');
console.log(briefForm);
const question1 = document.querySelector('#question-1-input');
const question2 = document.querySelector('#question-2-input');
const question3 = document.querySelector('#question-3-input');
const question4 = document.querySelector('#question-4-input');
const question5 = document.querySelector('#question-5-input');
const question6 = document.querySelector('#question-6-input');

briefForm.addEventListener('submit', async  e => {
  e.preventDefault();


  

  


if (question1.value === '' || question2.value === '' || question3.value === '' || question4.value === '' || question5.value === '' || question6.value === '') {
  
  return
} 

  console.log(question1.value,
    question2.value,
    question3.value,
    question4.value,
    question5.value,
    question6.value);

await axios.post('/api/briefings', { question1: question1.value, question2: question2.value, question3: question3.value, question4: question4.value, question5: question5.value, question6: question6.value });

  createNotification(false, 'Cotización enviada con éxito');
      setTimeout(() => {
        document.querySelector('.notification-active').remove();
      }, 1500)




// question1.value = ''
// question2.value = ''
// question3.value = ''
// question4.value = ''
// question5.value = ''
// question6.value = ''
// question7.value = ''
// question1.value = ''
// question2.value = ''
// question3.value = ''
// question4.value = ''
// question5.value = ''
// question6.value = ''
// question7.value = ''

briefForm.reset();


});

const purchaseBtn = document.querySelectorAll('.purchase-btn');


purchaseBtn.forEach(element => {
  element.addEventListener('click', async e => {
    console.log(e.target);

    try {
      
      const { data } = await axios.get('/api/main-app');

      window.location.pathname = `/purchase/${data}`;
      // cargar id en la barra de navegacion y llevar a otra pagina
      // window.location.pathname = `/purchase/${data}`;
  
    } catch (error) {
      console.log(error);
    //   showNotification(error.response.data.error, true, notification);
  
    }

  })
});







