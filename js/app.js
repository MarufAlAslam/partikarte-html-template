$('.filter-btn').click(function(e){
    e.preventDefault()
    $('.filter-btn').removeClass('active')
    $(this).addClass('active')
})


// featured slider
$(".featured-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<button class="btn btn-prev"><img src="img/f-prev.png" class="img-fluid" alt=""></button>',
    nextArrow: '<button class="btn btn-next"><img src="img/f-prev.png" class="img-fluid" alt=""></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});