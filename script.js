const toggleMenu = document.getElementById('toggle-menu');
const nav = document.getElementById('nav');

function handleToggle(e) {
  nav.classList.toggle('toggle-nav');
}

function handleClickOutside(event) {
  console.log('moving');
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
toggleMenu.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  handleToggle();
});
