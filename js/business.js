var wid = $(window).width();
if(wid <= 1025){
   $(".sub2>li").off("mouseover");
   $(".sub1>li").off("mouseover");
   $(".main_menu>li").off("mouseover");
    var chk = true;
   $(".main_menu>li").on("click", function(){
      if(chk == true){
         $(this).children(".sub1").fadeIn(200);
      }else if(chk == false){
         $(this).children(".sub1").fadeOut(200);
      }
      chk = !chk;
    });
    $(".sub1>li").on("click", function(){
         if($(this).hasClass("sub2_chk")){
            $(this).children(".sub2").fadeIn(200);
            $(this).removeClass("sub2_chk");
         }else {
            $(this).children(".sub2").fadeOut(200);
            $(this).addClass("sub2_chk");
  
      }
      
      chk = !chk;
    });
   }else {
   sub1hover();
   sub2hover();
   
}

$(window).resize(function(){
   location.reload(); // 윈도우 사이즈가 바뀔때 새로고침 해서 wid 변수 값을 변동 시킴. 
   wid = $(window).width();
});
function sub2hover(){
      $(".sub1>li").mouseover(function(){
       $(this).children(".sub2").fadeIn(200);
      });
      $(".sub1>li").mouseleave(function(){
       $(this).children(".sub2").fadeOut(200);
      });
}
function sub1hover(){
      $(".main_menu>li").mouseover(function(){
       $(this).children(".sub1").fadeIn(200);
      });
      $(".main_menu>li").mouseleave(function(){
       $(this).children(".sub1").fadeOut(200);
      });
}

/*Mver*/
$(function(){
   $("#menu").click(function(){
      $(this).toggleClass("aniMenu");
      $(".main_menu").fadeToggle(300);
   });
});


function prevFunc(){
   $(".slideWrap").prepend($(".slideWrap li").last().clone().css("transition","all .3s"));
   $(".slideWrap li").last().remove();
};

function nextFunc(){
   $(".slideWrap").append($(".slideWrap li").first().clone().css("transition","all .3s"));
   $(".slideWrap li").first().remove();
};

