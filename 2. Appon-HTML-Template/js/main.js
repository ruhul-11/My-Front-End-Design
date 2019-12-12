//APPON Project

$(function(){
    
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


    
    
    
$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    dots: true,
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

    

$('.slide_screen').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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
    
//Venobox plug in

$('.video_icon').venobox();
    
// Awesome Team Slider
    
    $('.awesome-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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
    
//Feedback Slider
    
    $('.feedback-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.client-slider',
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
    
    $('.client-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.feedback-slide',
    centerMode: true,
    centerPadding: 0,
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
    
    //Smooth Scrolling
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

