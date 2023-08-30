const toggleMenu = document.getElementById('toggle-menu');
const nav = document.getElementById('nav');

toggleMenu.addEventListener('click', handleToggle);

function handleToggle(e) {
  nav.classList.toggle('toggle-nav');
}

// Function to handle click outside the div
function handleClickOutside(event) {
  if (
    !nav.contains(event.target) &&
    event.target !== toggleMenu &&
    nav.classList.contains('toggle-nav')
  ) {
    nav.classList.remove('toggle-nav');
  }
}

// Attach a click event listener to the document
document.addEventListener('click', handleClickOutside);
document.addEventListener('scroll', handleClickOutside);
