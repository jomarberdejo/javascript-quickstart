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

/*Loading*/
document.onreadystatechange = function () {

  if (document.readyState !== "complete") {

    document.querySelector(".loading-spinner-container").style.display = "flex";

    document.body.style.overflow = "hidden";

  } else {

    setTimeout(function() {

    document.querySelector(".loading-spinner-container").style.display = "none";

    document.body.style.overflow = "auto";

}, 1500); 
  }

};

const navLinks = document.querySelectorAll('nav ul li a');

const spinnerContainer = document.querySelector('.loading-spinner-container');

navLinks.forEach(link => {

  link.addEventListener('click', () => {

    spinnerContainer.style.display = 'flex';

  });

});

document.addEventListener('DOMContentLoaded', () => {

  spinnerContainer.style.display = 'none';

});
