
// slider one
$('.slider-one').not(".slick-intialized").slick({
				  autoplay:true,
				  autoplayspeed:3000,
				  dots: true,
				  prevArrow:".site-slider .slider-btn .prev",
				  nextArrow:".site-slider .slider-btn .next",
				  
				}); 
// slidr two
$('.slider-two').not(".slick-intialized").slick({
			      slidesToShow: 5,
			      slidesToScroll: 1,
				  prevArrow:".site-slider-two .slider-btn .prev",
				  nextArrow:".site-slider-two .slider-btn .next",
				  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
				  
				}); 

// feature product slider
$('.feature-product').not(".slick-intialized").slick({
			      slidesToShow: 4,
			      slidesToScroll: 1,
				  prevArrow:".feature-product-slider .slider-btn .prev",
				  nextArrow:".feature-product-slider .slider-btn .next",
				  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
				  
				}); 