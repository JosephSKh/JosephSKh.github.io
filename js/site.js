$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(".cover").outerHeight()){
			$(".main-menu").addClass("navbar-fixed-top");
			$(".about").css("padding-top",$(".main-menu").height());
		}else{
			$(".main-menu").removeClass("navbar-fixed-top");
			$(".about").css("padding-top",0);
		}
	});
	$(".mouse-icon").click(function(){
		$('html, body').animate({
		    scrollTop: $(".cover").outerHeight()
		 }, 1000);
	});
	$(".main-menu .navbar-brand").click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({
		    scrollTop: 0
		 }, 1000);
	});
	$(".main-menu li a").click(function(e){
		e.preventDefault();
		var link = this;
		$('html, body').stop().animate({
		    scrollTop: $($(link).attr("href")).offset().top
		 }, 1000);
	});
});