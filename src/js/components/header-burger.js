const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header-burger');
const btn_close = document.querySelector('.header-btn-close');

burger.addEventListener('click', showMenu);
btn_close.addEventListener('click', hideMenu);

let keys = {
  ESC: 27,
};

let previousActiveElement;

function showMenu() {
  menu.classList.add('header__nav--active');
  previousActiveElement = document.activeElement;

  setTimeout(() => {
    btn_close.focus();
  }, 100);

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == keys.ESC) {
      hideMenu();
    }
  });
}

function hideMenu() {
  menu.classList.remove('header__nav--active');

  setTimeout(() => {
    previousActiveElement.focus();
  }, 100);
}
