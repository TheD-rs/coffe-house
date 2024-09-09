'use strict';

const burgStrip1 = document.querySelector('.burder__strip-1');
const burgStrip2 = document.querySelector('.burder__strip-2');
const burgIcon = document.querySelector('.burger__item');
const burgerMenu = document.querySelector('.header__burger__menu');
const bodyLock = document.querySelector('.body');
const menuLinks = document.querySelectorAll('.header__menu__link-burg');




burgIcon.addEventListener('click', () => {
    burgStrip1.classList.toggle('rotate__strip-1');
    burgStrip2.classList.toggle('rotate__strip-2');
    burgerMenu.classList.toggle('open');
    bodyLock.classList.toggle('lock');
})

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        burgStrip1.classList.remove('rotate__strip-1');
        burgStrip2.classList.remove('rotate__strip-2');
        burgerMenu.classList.remove('open');
        bodyLock.classList.remove('lock');
    })
})

window.addEventListener('resize', () => {
    if(window.matchMedia('(min-width: 769px)').matches) {
        burgStrip1.classList.remove('rotate__strip-1');
        burgStrip2.classList.remove('rotate__strip-2');
        burgerMenu.classList.remove('open');
        bodyLock.classList.remove('lock')
    }
})