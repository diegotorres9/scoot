menuHamburger = document.getElementById('mobile-menu-icon');
// console.log(menuHamburger);
mobileMenu = document.getElementById('mobile-nav');
// console.log(mobileMenu);
closeMenu = document.getElementById('close-menu-icon');
menuHamburger.addEventListener('click', (e) => {
    menuHamburger.style.visibility = 'hidden';
    mobileMenu.style.display = 'flex';
    closeMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeMenu.addEventListener('click', (e) => {
    menuHamburger.style.visibility = 'visible';
    mobileMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    document.body.style.overflow = 'visible';
});