document.addEventListener('DOMContentLoaded', function () {
  var multipleCardCarousel1 = document.querySelector("#carouselExampleControls1");
  var multipleCardCarousel2 = document.querySelector("#carouselExampleControls2");

  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel1 = new bootstrap.Carousel(multipleCardCarousel1, {
      interval: false,
    });

    var carousel2 = new bootstrap.Carousel(multipleCardCarousel2, {
      interval: false,
    });

    var cardWidth1 = $(".carousel-inner", multipleCardCarousel1).width();
    var cardWidth2 = $(".carousel-inner", multipleCardCarousel2).width();
    var scrollPosition1 = 0;
    var scrollPosition2 = 0;

    $("#carouselExampleControls1 .carousel-control-next").on("click", function () {
      if (scrollPosition1 < carouselWidth1 - cardWidth1 * 4) {
        scrollPosition1 += cardWidth1;
        $("#carouselExampleControls1 .carousel-inner").animate(
          { scrollLeft: scrollPosition1 },
          600
        );
      }
    });

    $("#carouselExampleControls1 .carousel-control-prev").on("click", function () {
      if (scrollPosition1 > 0) {
        scrollPosition1 -= cardWidth1;
        $("#carouselExampleControls1 .carousel-inner").animate(
          { scrollLeft: scrollPosition1 },
          600
        );
      }
    });

    $("#carouselExampleControls2 .carousel-control-next").on("click", function () {
      if (scrollPosition2 < carouselWidth2 - cardWidth2 * 4) {
        scrollPosition2 += cardWidth2;
        $("#carouselExampleControls2 .carousel-inner").animate(
          { scrollLeft: scrollPosition2 },
          600
        );
      }
    });

    $("#carouselExampleControls2 .carousel-control-prev").on("click", function () {
      if (scrollPosition2 > 0) {
        scrollPosition2 -= cardWidth2;
        $("#carouselExampleControls2 .carousel-inner").animate(
          { scrollLeft: scrollPosition2 },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel1).addClass("slide");
    $(multipleCardCarousel2).addClass("slide");
  }
});





