const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("menu");

window.onload = function () {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}