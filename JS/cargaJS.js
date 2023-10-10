// carga de paginas
$(document).ready(function () {
  $("#P1").click(function () {
    $("#Recarga_seccion_home").load("Libro_Reclamaciones.html");
  });

  $("#P2").click(function () {
    $("#Recarga_seccion_home").load("Formulario.html");
  });

  $("#P3").click(function () {
    $("#Recarga_seccion_home").load("contactanos.html");
  });

  $("#P4").click(function () {
    $("#Recarga_seccion_home").load("nosotros.html");
  });
  $("#P5").click(function () {
    $("#Recarga_seccion_home").load("nosotros.html");
  });
  $("#P6").click(function () {
    $("#Recarga_seccion_home").load("preguntas.html");
  });
});

// js para hacer que el navbar se vuelva invisible cuando hagas scroll y aparexca cuando subas el scroll
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbar.clientHeight}px`;
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleScroll);
