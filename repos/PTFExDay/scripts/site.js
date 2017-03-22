var body = $("html, body");
body.stop().animate({scrollTop:0}, '1000', 'swing', function() {
});
$(".navigation li").click(function(){
    $(".navigation li").removeClass('active');
    $(this).addClass('active');
    var target = $(this).data('section');
    target = $("." + target).offset().top;
        body.stop().animate({scrollTop: target}, '1000', 'swing', function() {
    });
});
$(".line-container").click(function(){
    $(".navigation li").removeClass('active');
    $($(".navigation li")[1]).addClass('active');
    var target = $(".content").offset().top;
        body.stop().animate({scrollTop: target}, '1000', 'swing', function() {
    });
});