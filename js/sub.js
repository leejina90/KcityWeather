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