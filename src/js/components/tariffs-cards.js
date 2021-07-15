document.querySelectorAll('.tariffs-card--bottom').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');

    document.querySelectorAll('.tariffs-card--bottom').forEach(el => el.classList.remove('tariffs-card--bottom--current'));

    e.currentTarget.classList.add('tariffs-card--bottom--current');
  });
});
