$(document).ready(function(){
function HideShowNav(){
    if($(window).scrollTop()>=$(".cover").outerHeight()){
            $(".main-menu").addClass("navbar-fixed-top");
            $(".about").css("padding-top",$(".main-menu").height());
            $(".go-up").css("opacity",1);
        }else{
            $(".main-menu").removeClass("navbar-fixed-top");
            $(".about").css("padding-top",0);
            $(".go-up").css("opacity",0);
        }
    };
    HideShowNav();
	$(window).scroll(function(){
		HideShowNav();
	});
	$(".mouse-icon").click(function(){
		$('html, body').animate({
		    scrollTop: $(".cover").outerHeight()
		 }, 1000);
	});
	$(".main-menu .navbar-brand,.go-up").click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({
		    scrollTop: 0
		 }, 1000);
	});



    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main-menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if(typeof refElement != 'undefined' && refElement.selector!="#"){
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-menu ul li a').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
        }
    });
}


//MixItUo
$(function(){

    // Instantiate MixItUp:

    $('#PortfolioContainer').mixItUp();

});


});