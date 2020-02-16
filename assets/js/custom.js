/* portfolio */
$(document).ready(function(){
$(function(){
    $('.porfolio__menu button').click(function(){
        var get_id =this.id;
        var get_current = $('.portfolio__boxes .' + get_id);
        
        $('.box').not(get_current).hide(600);
        get_current.show(600);
    });
    
    $('#all').click(function(){
        $('.box').show(500);
    });
});
/* burger menu */
$(function(){
   var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    
    link.click(function(){
       link.toggleClass('menu-link_active'); 
    });
    
    link_active.click(function(){
    link.removeClass('menu-link_active');
        });
}); 
/* Smooth Scroll */

$(function(){
    $("a").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop:
                $(hash).offset().top
            },900, function(){
                window.location.hash = hash;
            });
        } // End IF
        
    }) ;
    
  }); 



});
















