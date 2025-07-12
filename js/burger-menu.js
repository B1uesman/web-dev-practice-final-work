document.getElementById('burger-toggle').addEventListener('click', function () {
    const menu = document.getElementById('burger-menu');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.right = "0px" // показываем меню
    } else {
        menu.classList.add('hidden');
        menu.style.right = "-150px"    // скрываем меню
    }
});
document.getElementById('burger-menu').addEventListener("mouseleave", () => {
    const menu1 = document.getElementById('burger-menu'); 
    menu1.classList.add('hidden');
    menu1.style.right = "-150px"    // скрываем меню
});