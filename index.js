let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('aside nav a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top <= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('aside nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });
};
