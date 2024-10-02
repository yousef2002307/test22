$(document).ready(function(){
    
$(window).scroll(function(){
    if($(window).scrollTop() > 10){
        $("nav.navbar").addClass('navbar-fixed-top');
        $("body").css("paddingTop","70px");
    }else{
        $("nav.navbar").removeClass('navbar-fixed-top');
        $("body").css("paddingTop","0px");
    }
});
$("i.fa-cog").click(function(){
$(this).toggleClass("theme-r");
if($(this).hasClass("theme-r")){
    $(".theme-jo").animate({
        left:-200
    },1000);
    $(this).animate({
        left : 0
    },1000)
}else{
    $(".theme-jo").animate({
        left:0
    },1000);
    $(this).animate({
        left : 186
    },1000);
}
});

$(".theme-jo .theme-box .theme-spans span").click(function(){
$("link[href*='theme']").attr("href",$(this).attr('data-value'));
});
$(".panel-heading i").click(function(){
$(this).parent(".panel-heading").siblings("div.panel-collapse").toggleClass("in");
var x = $(this).parent(".panel-heading").siblings("div.panel-collapse");
$(this).parents(".panel-default").siblings("panel-default").children("div.panel-collapse").removeClass("in");

});
//$("div.collapse ul.navbar-nav li").click(function(){
//$(this).addClass("active");
//$(this).siblings().removeClass("active");
//});
$(".carousel").carousel({
interval : 9000
});
$(function() {  
    $("body").niceScroll();
});
});


//nice scroll //

//nice scroll ///
////////////////

////////////////
/*
$(".carousel  div.item img").each(function(){
    $(this).css("width","100%");
});
*/
