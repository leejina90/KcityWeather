//현재 날짜, 시간 정보 구하기
var d = new Date();

// 요일 출력형식을 긴 영어형식으로 변경
var dayEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$(".day").append(dayEngName[d.getDay()]);

// 월 출력형식을 짧은 영어형식으로 변경
var monthEngName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$(".month").append(monthEngName[d.getMonth()]);

$(".date").append(d.getDate());
$(".hours").append(d.getHours());
$(".minutes").append(d.getMinutes());