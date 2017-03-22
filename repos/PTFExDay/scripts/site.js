var body = $("html, body");
body.stop().animate({scrollTop:0}, '1000', 'swing', function() {
});
$(".navigation li").click(function(){
    // $(".navigation li").removeClass('active');
    // $(this).addClass('active');
    var target = $(this).data('section');
    target = $("." + target).offset().top;
        body.stop().animate({scrollTop: target}, '1000', 'swing', function() {
    });
});
$(".line-container").click(function(){
    // $(".navigation li").removeClass('active');
    // $($(".navigation li")[1]).addClass('active');
    var target = $(".content").offset().top;
        body.stop().animate({scrollTop: target}, '1000', 'swing', function() {
    });
});
// $(window).scroll(function(){
//     $("section").each(function(){
//         if(window.scrollY >= $(this).offset().top && window.screenY <= $(this).offset().top + ($(this).height() - 500)) {
//             $(".navigation li").removeClass('active');
//             $("li[data-section="+$(this).data('name')+"]").addClass('active');
//         }
//     });
// });