// Mobile Menu Script
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.classList.contains('mobile-menu-active');

    if (isOpen) {
        menu.classList.remove('mobile-menu-active');
    } else {
        menu.classList.add('mobile-menu-active');
    }
}