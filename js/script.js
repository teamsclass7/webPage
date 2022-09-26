$(function(){
   $(".main_menu>li").hover(function(){
      $(this).children(".sub1").fadeIn(100);
   },function(){
      $(this).children(".sub1").fadeOut(100);
   });
});

$(function(){
   $(".sub1>li").hover(function(){
      $(this).children(".sub2").fadeIn(100);
   },function(){
      $(this).children(".sub2").fadeOut(100);
   });
});

$(function(){
   $("#menu").click(function(){
      $(this).toggleClass("aniMenu");
      $(".main_menu").fadeToggle(100);
   });
});

/*
function prevFunc(){
   $(".slideWrap").prepend($(".slideWrap li").last().clone().css("transition","all .3s"));
   $(".slideWrap li").last().remove();
};

function nextFunc(){
   $(".slideWrap").append($(".slideWrap li").first().clone().css("transition","all .3s"));
   $(".slideWrap li").first().remove();
};
*/
