const toggle = document.getElementById("menu-toggle");
let img = document.querySelector(".slide img");
const nav = document.getElementById("menu");

window.onload = function () {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });


  // Lista das imagens
  let imagens = [
    "./images/carrossel/image1.png",
    "./images/carrossel/image2.png",
  ];

  // Começa pela primeira
  let indice = 0;

  // Mostra a imagem atual
  function mostrarImagem() {
    // console.log(indice, imagens.length)
    img.src = imagens[indice];
  }

  // Botão "próximo"
  document.querySelector(".next").addEventListener("click", function () {
    indice++;
    if (indice >= imagens.length) {
      indice = 0; // volta para a primeira
    }
    mostrarImagem();
  });

  // Botão "anterior"
  document.querySelector(".prev").addEventListener("click", function () {
    indice--;
    if (indice < 0) {
      indice = imagens.length - 1; // vai para a última
    }
    mostrarImagem();
  });

  // Quando abrir o site, mostra a primeira imagem
  mostrarImagem();

}