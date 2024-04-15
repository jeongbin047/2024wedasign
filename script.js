$(".main-menu li").mouseover(function(){
    $(".sub-menu").stop().slideDown();
}).mouseout(function(){
    $(".sub-menu").stop().slideUp();
})

$(".tab-title2 ul li:first-child").click
(function(){
    $(".notice-con").show();
    $(".gallery-con").hide();
})

$(".tab-title2 ul li:nth-child(2)").click
(function(){
    $(".notice-con").hide();
    $(".gallery-con").show();
})

