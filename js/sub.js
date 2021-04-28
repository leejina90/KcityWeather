//주소에서 도시정보를 다시 받아와서 해당 도시의 정보로 내용 변경
var url = location.href;

var urlObj = new URL(url);
var params = urlObj.searchParams;
var q = params.get("q");

var forecast = new Forecast();
var locationWeather = forecast.getCurrentWeather(q);

var cityList = ["Seoul", "Incheon", "Daejeon", "Daegu", "Ulsan", "Gwangju", "Busan", "Jeju"];

//서브페이지에서 다른 도시정보 클릭시 클릭이벤트
$(function(){
    $(".temp").each(function(i){
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "℃");
    });

    $(".city_link").on({
        "click" : function(){
            var q = $(this).children(".city").attr("id");
            var redirectURL = "sub_pages.html?q=" + q;
            location.href = redirectURL;
        }
    });
});

// 클릭 후 도시정보 잘 넘어왔는지 확인용
// document.write(document.location.search);

// YTPlayer start
// 쿼리스트링 값에서 받아온 도시이름을 동영상 주소와 매칭시켜서 각 도시페이지마다 다른 영상이 틀어지도록
let qPlayUrl = {
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
// YTPlayer end