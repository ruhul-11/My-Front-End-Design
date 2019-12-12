$(function(){
//    
    var $dis = $(".full-banner").offset().top;
    
    $(window).scroll(function(){
        
        var $scrolling = $(this).scrollTop();
        
        if($scrolling >= $dis){
            $(".full-header").addClass("sticky");
        }
        else{
            $(".full-header").removeClass("sticky");
        }
    })

    
    
        $(".top").click(function(){
        
        $('html,body').animate({
            
            scrollTop : 0
            
        }, 1000)
        
    });
    
    $(window).scroll(function(){
       var $scroll = $(this).scrollTop();
        
        if($scroll >= 100){
            $(".top").fadeIn();
        }
        
        else{
            $(".top").fadeOut();
        } 
    }) 
    
})