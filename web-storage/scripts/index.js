"Use Strict"


const nameInput = document.getElementById('nameInput');
const studentRadio = document.getElementById('studentRadio');
const instructorRadio = document.getElementById('instructorRadio');
const enterBtn = document.getElementById('enterBtn');


enterBtn.addEventListener('click', () => {
  
    localStorage.setItem('name', nameInput.value);


    if (studentRadio.checked) {
        localStorage.setItem('role', 'Student');
    } else if (instructorRadio.checked) {
        localStorage.setItem('role', 'Instructor');
    }
    
  
    window.location.href = './information.html';
});
