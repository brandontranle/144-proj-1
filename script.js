const mobileMenuBtn = document.querySelector('.menu-toggle' || '#menu-toggle');
const nav = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', function () {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});


