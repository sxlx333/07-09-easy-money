document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header.container');
  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelectorAll('.nav-bar .link');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('open');
    document.body.style.overflow = header.classList.contains('open')
      ? 'hidden'
      : '';
  });

  links[0].classList.add('active');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((link) => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
