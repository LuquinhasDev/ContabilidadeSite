const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
