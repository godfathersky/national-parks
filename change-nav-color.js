$(window).scroll(function(){
    let value_of_scroll = $(window).scrollTop();
    let scrolled_nav = $.contains('nav', '.scrolled-nav');
    if(value_of_scroll>90 && scrolled_nav == false){
        $('nav').addClass('scrolled-nav');
    }
    else{
        $('nav').removeClass('scrolled-nav');
    }
});