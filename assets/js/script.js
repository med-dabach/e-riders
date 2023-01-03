
menu = document.getElementById("menu");
hidee = document.getElementById('bghide');
function toggleNavBar() {
    if (menu.classList == 'hide') {
        menu.classList = 'show';
        hidee.style.height = '100vh';
    } else {
        menu.classList = 'hide';
        hidee.style.height = '0vh';
    }
}

