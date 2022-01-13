const headerHamburguer = document.querySelector('.header-hamburguer');
const header = document.querySelector('header');

headerHamburguer.addEventListener('click', () => {
    header.classList.toggle('active');
});