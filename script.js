const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

window.onscroll = () => {
  navLinks.classList.remove("active");
};

/* Typing text animator */

const typed = new Typed(".multiple-text", {
  strings: ["Desenvolvedor Frontend", "Suporte Técnico"],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 100,
  loop: true,
});
