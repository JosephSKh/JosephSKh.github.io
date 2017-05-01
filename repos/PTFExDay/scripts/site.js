//on load
var body = $("html, body");
var speakerIndex = 0;
var myUrl="https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCTrNwll1lIH5SRcrR9xi24w&maxResults=25&key=AIzaSyCOgen6lROD96RJgDGDECBtFUJDbz7D8jE";

$(document).ready(function() {
	$.ajax({
            url:myUrl, 
            type: "get",
            success: function(returnhtml){ 
				var videosStrAxioms = "";
				var videosStrConformity = "";
				
				for(var i in returnhtml.items)
				{
					if((returnhtml.items[i].snippet.title.toLowerCase().indexOf("exday") > -1)&&(returnhtml.items[i].snippet.description.toLowerCase().indexOf("ch.") == -1)&&(returnhtml.items[i].snippet.title.toLowerCase().indexOf("axioms") > -1)&&(returnhtml.items[i].snippet.title.toLowerCase().indexOf("choir") == -1))
					{
						videosStrAxioms += '<div class = "col-md-3"><iframe width="100%" height="150" src="https://www.youtube.com/embed/'+returnhtml.items[i].id.videoId+'" frameborder="0" allowfullscreen></iframe></div>';
					}
					else if((returnhtml.items[i].snippet.title.toLowerCase().indexOf("exday") > -1)&&(returnhtml.items[i].snippet.description.toLowerCase().indexOf("ch.") == -1)&&(returnhtml.items[i].snippet.title.toLowerCase().indexOf("conformity") > -1))
					{
						videosStrConformity += '<div class = "col-md-3"><iframe width="100%" height="150" src="https://www.youtube.com/embed/'+returnhtml.items[i].id.videoId+'" frameborder="0" allowfullscreen></iframe></div>';
					}
				}
				$(".prev-videos-axioms").append(videosStrAxioms);
				$(".prev-videos-conformity").append(videosStrConformity);
            }           
        }); 
	
	$('[data-toggle="tooltip"]').tooltip();
		});

setInterval(function(){
    speakerIndex++;
    if(speakerIndex == $(".speaker").length) {
        speakerIndex = 0;
    }
    $(".speaker").removeClass("active");
    $(".speaker").eq(speakerIndex).addClass("active");
},3000);
body.stop().animate({scrollTop:0}, 1000, 'swing', function() {
});
////////////////////
$(".navigation li").click(function(){
    // $(".navigation li").removeClass('active');
    // $(this).addClass('active');
    var target = $(this).data('section');
    target = $("[data-name=" + target + "]").offset().top;
        body.stop().animate({scrollTop: target}, 1000, 'swing', function() {
    });
});
////////////////////
$(".line-container").click(function(){
    // $(".navigation li").removeClass('active');
    // $($(".navigation li")[1]).addClass('active');
    var target = $("[data-name=content]").offset().top;
        body.stop().animate({scrollTop: target}, 1000, 'swing', function() {
    });
});
////////////////////
$(".speaker").click(function(){
    speakerIndex = $(this).index();
    $(".speaker").removeClass("active");
    $(this).addClass("active");
});

function initMap() {
    var contentString = '<div id="content">'+
      '<h3 id="firstHeading" class="firstHeading">مسرح النيل الكاثوليكي</h3>'+
      '</div>';
        var uluru = {lat: 30.048316, lng: 31.244038};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru,
          scrollwheel: false,
        });
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
        infowindow.open(map, marker);
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
      }
////////////////////
// $(window).scroll(function(){
//     $("section").each(function(){
//         if(window.scrollY >= $(this).offset().top && window.screenY <= $(this).offset().top + ($(this).height() - 500)) {
//             $(".navigation li").removeClass('active');
//             $("li[data-section="+$(this).data('name')+"]").addClass('active');
//         }
//     });
// });