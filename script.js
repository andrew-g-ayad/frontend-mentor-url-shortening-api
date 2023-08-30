const toggleMenu = document.getElementById('toggle-menu');
const nav = document.getElementById('nav');

toggleMenu.addEventListener('click', handleToggle);

function handleToggle(e) {
  nav.classList.toggle('toggle-nav');
}

function handleClickOutside(event) {
  if (
    !nav.contains(event.target) &&
    event.target !== toggleMenu &&
    nav.classList.contains('toggle-nav')
  ) {
    nav.classList.remove('toggle-nav');
  }
}

document.addEventListener('click', handleClickOutside);
document.addEventListener('scroll', handleClickOutside);
