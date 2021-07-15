document.querySelectorAll('.nav-list__link').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');

    document.querySelectorAll('.nav-list__link').forEach(el => el.classList.remove('nav-list__link--current'));

    e.currentTarget.classList.add('nav-list__link--current');
  });
});


