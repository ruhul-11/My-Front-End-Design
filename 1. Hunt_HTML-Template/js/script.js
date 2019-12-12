$(function(){
    
    //scrollspy menu
	
    $('body').scrollspy({
        target: '.navbar',
        offset: 101
    });

    var htmlBody = $('html, body');
    
    //nav top js
	var nav_navbar = $('nav.navbar'),
        $window = $(window),
        navOffset = nav_navbar.offset().top;

    $('.nav-wrapper').height(nav_navbar.outerHeight());
    
    $('ul.navbar-nav > li > a').on('click', function(){
        $('.navbar-collapse').removeClass('in');
        console.log('test');
    });




    //Sticky Menu code
    
        var $dis = $('.full_nav').offset().top;
        var $menu = $('.full_nav')


    $(window).scroll(function () {

        var $scroll = $(this).scrollTop();

        if ($scroll > $dis) {
            $menu.addClass('sticky');
        } else {
            $menu.removeClass('sticky');
        }
    })
    //END HERE
    
    
     //Top button code

    $(".top-btn").click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).scroll(function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= 450) {
            $(".top-btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
        }
    });
    //END HERE
    
    
    //Banner Slider__Slick
    $('.banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prev_arrow',
    nextArrow: '.next_arrow',
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
    //END HERE
    
    
    //Venobox Initialize
    $(document).ready(function(){
    $('.venobox').venobox(); 
});
    
    // END HERE
    
    //Portfolio Slider__Slick
    $('.portfolio-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
        breakpoint: 321,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }

  ]
});
    //END HERE
    
    
    //Service Slider__Slick
    $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    vertical: true,
    prevArrow: '.service-up-arrow',
    nextArrow: '.service-down-arrow',
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 2000,
    speed: 1000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
        breakpoint: 321,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

  ]
});
    //END HERE
    
    
     //Testimonial Slider__Slick
    $('.testimonial-slider').slick({
    asNavFor: '.test-details-slide',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    vertical: true,
    prevArrow: '.testimonial-up-arrow',
    nextArrow: '.testimonial-down-arrow',
    centerMode: true,
    centerPadding: '0px',
    verticalSwiping: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false
            }
    },
        {
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

  ]
});
    //END HERE
    
    //Test-Details-Slider__Slick
    $('.test-details-slide').slick({
    asNavFor: '.testimonial-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
        breakpoint: 321,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

  ]
});
    //END HERE


    //Team Slider__Slick
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                    
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        },
            {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    
      ]
    });
        //END HERE

        $('.count-number').counterUp({
            delay: 10,
            time: 2000
        });




        //Logo Slider__Slick
    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        speed: 1000,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                    
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
        },
            {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    
      ]
    });
        //END HERE
        


        $("a").on('click', function(event) {

            if (this.hash !== "") {
              event.preventDefault();
        
              var hash = this.hash;
        
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
        
                window.location.hash = hash;
              });
            } 
          });
	
    
})