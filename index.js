import './index.css';

const button = document.querySelector('button')
button.addEventListener('click', () =>{
    localStorage.setItem('display', 'none')
    const coocieElemetn = document.querySelector('.cookie-consent')
    coocieElemetn.classList.add(localStorage.getItem('display'))
})
// localStorage.clear()

const coocieElemetn = document.querySelector('.cookie-consent')
coocieElemetn.classList.add(localStorage.getItem('display'))

// localStorage.clear()