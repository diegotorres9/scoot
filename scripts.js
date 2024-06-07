menuHamburger = document.getElementById('mobile-menu-icon');
// console.log(menuHamburger);
mobileMenu = document.getElementById('mobile-nav');
// console.log(mobileMenu);
closeMenu = document.getElementById('close-menu-icon');
menuHamburger.addEventListener('click', (e) => {
    menuHamburger.style.visibility = 'hidden';
    mobileMenu.style.display = 'block';
    closeMenu.style.display = 'block';
});
closeMenu.addEventListener('click', (e) => {
    menuHamburger.style.visibility = 'visible';
    mobileMenu.style.display = 'none';
    closeMenu.style.display = 'none';
});