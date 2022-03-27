let navbar = document.querySelector(".navbar");
console.log(navbar)

window.addEventListener("scroll", (e) => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
})