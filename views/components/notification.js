const body = document.querySelector('body');

export const createNotification = (isError, message) => {
    const div = document.createElement('div');
    div.classList.add('fixed', 'top-24', 'right-0', 'left-0', 'flex', 'items-center', 'justify-center', 'max-w-7xl', 'rounded-md', 'notification-active');

    if (isError) {
        div.innerHTML = 

        `
            <p class="bg-red-500 p-2 rounded-md font-bold">${message}</p>
        `;  
    } else {
        div.innerHTML = 

    `
        <p class="bg-green-400 p-2 rounded-md font-bold">${message}</p>
    `;
    };

    body.append(div);
    
};