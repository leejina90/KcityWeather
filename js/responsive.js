// $(function(){
//     // 모바일 햄버거 메뉴 클릭시
//     $(".trigger").on({
//         "click" : function() {
//             if ($(".mobile.hamburger").is(":visible")) {
//                 // 모바일 닫기 버튼 show
//                 $(".mobile.hamburger").hide();
//                 $(".mobile.close").show();

//                 // 모바일 전체 메뉴 show
//                 $("#main_header").height(60);
//                 $("#main_content").hide();
//                 $("#main_footer").hide();

//                 $("#mobile_menu").empty(); //mobile_menu 하위 태그
//                 $("li").eq(3).show(); //mobile에서만 보이는
//                 $("li").eq(4).show();

//                 var nav = $(".nav").clone();
//                 $("#mobile_menu").append(nav);
//                 $("#mobile_menu").show();

//             } else { //닫기 메뉴 버튼이 보일때
//                 // 모바일 햄버거 버튼 show
//                 $(".mobile.hamburger").show();
//                 $(".mobile.close").hide();

//                 // 모바일 전체 메뉴 show
//                 $("#main_header").height(390);
//                 $("#main_content").show();
//                 $("#main_footer").show();
                
//                 $("#mobile_menu").hide();
//             }
//         },
//         "mouseleave" : function() {
//             //...
//         }
//     });

//     $(window).resize(function(){
//         var width = $(window).width();

//         if(width > 767) {
//             $("li").eq(3).hide();
//             $("li").eq(4).hide();

//             if ($("#mobile_menu").is(":visible")) {
//                 $(".mobile.hamburger").show();
//                 $(".mobile.close").hide();

//                 $("#main_header").height(390);
//                 $("#main_content").show();
//                 $("#main_footer").show();

//                 $("#mobile_menu").hide();
//             }
//         }
//     });
// });

$(function(){
    $("#arrow").on({
        "click" : function() {
            if($("#side_city").width() < 51) {
                $("#side_city").width(400);
                $("#arrow").text(">");
        
                $("#daytime_info").css({
                    "right":"400px"
                });
            } else {
                $("#side_city").width(50);
                $("#arrow").text("<");
        
                $("#daytime_info").css({
                    "right":"50px"
                });
            }
        }
    });
});



// 마우스오버된 클래스 하나만 적용되게 수정해야함
// $(function(){
//     $(".city_link").on({
//         "mouseover focus" : function() {
//             $(".city_link").css({
//                 "font-size":"3em"
//             });
//         }
//     });
// });