/** SLICK SLIDE **/

$(document).ready(function () {
  $(".work_slider_wrap").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });
});
