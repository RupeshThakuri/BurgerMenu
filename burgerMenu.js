const menu = document.querySelector('.burger');
const exit = document.querySelector('.wrong');

menu.addEventListener("click", () => {
    menu.classList.add('menu-disappear');
    exit.classList.remove('wrong');
});
exit.addEventListener("click", () => {
    exit.classList.add('wrong');
    menu.classList.remove('menu-disappear');
});