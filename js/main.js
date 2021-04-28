//날씨정보 불러오기
var forecast = new Forecast();

console.log(forecast.getCurrentWeather("Seoul"));

// 도시리스트 클릭이벤트
var cityList = ["Seoul", "Incheon", "Daejeon", "Daegu", "Ulsan", "Gwangju", "Busan", "Jeju"];

$(function(){
    $(".temp").each(function(i){
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "℃");
    });

    $(".city_link").on({
        "click" : function(){
            var q = $(this).children(".city").attr("id");
            var redirectURL = "pages/sub_pages.html?q=" + q;
            location.href = redirectURL;
        }
    });
});

// YTPlayer
$("#bg_player").data("property", {
    videoURL: 'ODLK5cWivWo',
    mute: true,
    showControls: false,
    useOnMobile: true,
    quality: 'highres',
    containment: 'body',
    loop: true,
    autoPlay: true,
    stopMovieOnBlur: false,
    startAt: 0,
    opacity: 1
});