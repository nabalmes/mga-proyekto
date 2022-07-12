const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.getElementById('navbar__logo');
const body = document.querySelector('body');


// Display menu - Mobileview

const mobileMenu = function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu)
