// Custom Scripts
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
);
wow.init();

$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 750,
    easing: 'easeOutQuad',
    infinite: false,
    initialSlide: 1,
    draggable: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          initialSlide: 0
        }
      }
    ]
  });

  
});

// WOW
