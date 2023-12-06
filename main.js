import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

// added by angela
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');

    mobileMenuButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
