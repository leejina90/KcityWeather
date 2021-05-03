// 날씨정보 받아오기
var forecast = new Forecast();

// 주소에서 도시정보를 다시 받아와서 해당 도시의 정보로 내용 변경
var url = location.href;
var urlObj = new URL(url);
var params = urlObj.searchParams;
var q = params.get("q");

var cityList = ["Seoul", "Incheon", "Daejeon", "Daegu", "Ulsan", "Gwangju", "Busan", "Jeju"];

// q값이 있으면(true면) q값으로 날씨정보를 받아오고 없으면 서울 디폴트값 넣어주기
$(function(){
    if(q) {
        var locationWeather = forecast.getCurrentWeather(q);
    } else {
        var locationWeather = forecast.getCurrentWeather("seoul");
    }
});

// 다른 도시정보 클릭이벤트
$(function(){
    $(".temp").each(function(i){
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "℃");
    });

    $(".city_link").on({
        "click" : function(){
            var q = $(this).children(".city").attr("id");
            var redirectURL = "?q=" + q;
            location.href = redirectURL;
        }
    });
});


// q값이 있고 width가 767보다 크면(모바일해상도가 아니면) 사이드메뉴 펼침상태 유지. 
$(function(){
    if(q) {
        var width = $(window).width();
        
        if(width > 767) {
            $("#side_city").width(400);
            $("#arrow").text("▶");
        
            $("#daytime_info").css({
                "right":"400px"
            });

            $("#city_list").delay(400).slideToggle(1000);
        }
    }
});

// YTPlayer start
// 쿼리스트링 값에서 받아온 도시이름을 동영상 주소와 매칭시켜서 각 도시페이지마다 다른 영상이 틀어지도록
// q값이 있으면(true면) q값으로 도시정보를 받아오고 없으면 디폴트값 설정 넣어주기
if(q) {
    var qPlayUrl = {
        "Seoul" : "3P1CnWI62Ik",
        "Incheon" : "24iEAmpWn-0",
        "Daejeon" : "EuVYwiMT-64",
        "Daegu" : "QNIk4cRBWWM",
        "Ulsan" : "qBvJf8jZ6kg",
        "Gwangju" : "HVLiTRy9KKY",
        "Busan" : "_COoT5Y_HU8",
        "Jeju" : "4idDXcuXlL0"
    };
    
    $("#bg_player").data("property", {
        videoURL: qPlayUrl[q],
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
} else {
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
}
// YTPlayer end