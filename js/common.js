// 반응형 start
$(function(){
    $("#arrow").on({
        "click" : function() {
            if($("#side_city").width() < 51) {
                $("#side_city").width(400);
                $("#arrow").text("▶");
        
                $("#daytime_info").css({
                    "right":"400px"
                });
                $("#city_list").delay(400).slideToggle(1000);
            } else {
                $("#side_city").width(50);
                $("#arrow").text("◀");
        
                $("#daytime_info").css({
                    "right":"50px"
                });
                $("#city_list").hide();
            }
        }
    });

    $("#arrow_mobile").on({
        "click" : function() {
            if($("#side_city").is(":hidden")) {
                $("#side_city").slideDown(500);
                $("#arrow_mobile").text("▲");
                $("#city_list").slideDown(1200);
            } else {
                $("#side_city").slideUp(500);
                $("#arrow_mobile").text("▼");
                $("#city_list").slideUp(700);
            }
        }
    });

    $(window).resize(function(){
        var width = $(window).width();
        
        if(width > 767) {
            $("#arrow_mobile").hide();
            $("#side_city").slideDown();

            $("#side_city").width(50);
            $("#arrow").text("◀");
            $("#city_list").hide();

            $("#daytime_info").css({
                "right":"50px"
            });
        } else {
            $("#arrow_mobile").show();
            $("#side_city").slideUp();

            $("#side_city").width("100vw");
            $("#city_list").hide();
        }
    });
});
// 반응형 end

// 날씨 정보 start
function Forecast() {
    this.url = "https://api.openweathermap.org/data/2.5/weather";
    this.url += "?units=" + "metric";
    this.url += "&lang=" + "kr";
    this.url += "&APPID=" + "91b7464ae7657f4df26a893c764f396d";
    this.url += "&q=";
}

// 현재 날씨의 모든 정보 얻어오기
Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var openWeatherAPI = this.url;

    let weatherIcon = {
        "01" : "fas fa-sun",
        "02" : "fas fa-cloud-sun",
        "03" : "fas fa-cloud",
        "04" : "fas fa-cloud-meatball",
        "09" : "fas fa-cloud-sun-rain",
        "10" : "fas fa-cloud-showers-heavy",
        "11" : "fas fa-poo-storm",
        "13" : "fas fa-snowflake",
        "50" : "fas fa-smong"
    };

    $.ajax({
        type:"GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,
        success:function(data) {
            $(".city_main").append(data.name);
            $(".city_temp").append(Math.floor(data.main.temp) + "℃");

            // openWeatherAPI 아이콘 사용시
            // var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            // $('#city_img').attr("src", imgURL);

            // 폰트어썸 아이콘으로 교체 사용
            var cityIcon = (data.weather[0].icon).substr(0,2); 
            $(".city_icon").append('<i class="' + weatherIcon[cityIcon] + '"></i>');
            
            $(".city_humidity").append(data.main.humidity + "%");
            $(".city_wind").append(data.wind.speed);
            $(".city_cloud").append(data.clouds.all + "%");

            dataObj = data;
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj;
};

Forecast.prototype.getCurrentTemp = function(city) {
    var temp;
    var openWeatherAPI = this.url;

    $.ajax({
        type:"GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,
        success:function(data) {
            temp = Math.floor(data.main.temp);
        },
        error:function(request,status,error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        },
        complete:function(data,textStatus) {

        }
    });

    return temp;
};
// 날씨 정보 end

// 현재 날짜, 시간 정보 start
var d = new Date();

// 요일 출력형식을 긴 영어형식으로 변경
var dayEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$(".day").append(dayEngName[d.getDay()]);

// 월 출력형식을 짧은 영어형식으로 변경
var monthEngName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$(".month").append(monthEngName[d.getMonth()]);

$(".date").append(("00" + d.getDate()).slice(-2)); // 01~31 형식으로 출력
$(".hours").append(d.getHours());
$(".minutes").append(("00" + d.getMinutes()).slice(-2)); // 00~59 형식으로 출력
// 현재 날짜, 시간 정보 end

// YTPlayer start
jQuery( function() {
    jQuery("#bg_player").YTPlayer();
});
// YTPlayer end