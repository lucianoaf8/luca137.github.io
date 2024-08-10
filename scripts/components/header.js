// scripts/components/header.js
export function initializeHeader() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('expanded');
        menu.classList.toggle('collapsed');
    });
}