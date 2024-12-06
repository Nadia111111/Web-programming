const menuButton = document.getElementById("burger-menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
