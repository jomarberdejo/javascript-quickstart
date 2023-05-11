/*Burger menu for sidebar*/
const sidebar = document.querySelector('.sidebar');

document.addEventListener('click', event => {
  if (event.target.closest('.sidebar-toggle, .sidebar') === null) {
    sidebar.classList.remove('open');
  }
});

document.querySelector('.sidebar-toggle').addEventListener('click', () => {
  sidebar.classList.toggle('open');
});



//Code for about-contents
const aboutContentTitle = document.querySelectorAll(".about-content-title");

aboutContentTitle.forEach((title) => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle("show");
  });
});

