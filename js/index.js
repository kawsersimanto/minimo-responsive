let toggleButton = document.querySelector(".toggle-button");
let navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", showNavLinks);

function showNavLinks(e){
  navLinks.classList.toggle("active");
}

console.log(toggleButton, navLinks);