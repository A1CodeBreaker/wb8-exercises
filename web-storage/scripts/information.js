"Use Strict"


const greeting = document.getElementById('greetingMessage');


const logOutBtn = document.getElementById('logOutBtn');


greeting.innerHTML = `${localStorage.getItem('role')} ${localStorage.getItem('name')}`;

logOutBtn.addEventListener('click', () => {
   
    localStorage.removeItem('name');
    localStorage.removeItem('role');

    window.location.href = './index.html';
});
