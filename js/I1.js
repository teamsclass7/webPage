var count = 1;
var countEl = document.getElementById("count");
var total_count = document.getElementById("total_count");
var total_count_view = document.getElementById("total_count_view");

$(document).ready(function(){
  total_count_view.value = insertCommas(total_count.value * countEl.value);
})


function plus(){
  count++;
  countEl.value = count;
  total_count_view.value = insertCommas(total_count.value * countEl.value);
}
function minus(){
  
  if (count > 1) {
    count--;
    countEl.value = count;
  total_count_view.value = insertCommas(total_count.value * countEl.value);
  }  
}




function insertCommas(n) {
  // get stuff before the dot
  let s1 = n.toString();
  var d = s1.indexOf('.');
  var s2 = d === -1 ? s1 : s1.slice(0, d);

  // insert commas every 3 digits from the right
  for (var i = s2.length - 3; i > 0; i -= 3)
    s2 = s2.slice(0, i) + ',' + s2.slice(i);

  // append fractional part
  if (d !== -1)
    s2 += s1.slice(d);

  return s2;
}


$(function(){
$("#btn_a").click(function(){
  $(".con_a").show();
  $("#btn_a").css({
    "background" : "#666",
    "color" : "#fafafa"
  });
  $(".con_b").hide();
  $("#btn_b").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_c").hide();
  $("#btn_c").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_d").hide();
  $("#btn_d").css({
    "background" : "none",
    "color" : "#333"
  });
});
});
$(function(){
$("#btn_b").click(function(){
  $(".con_b").show();
  $("#btn_b").css({
    "background" : "#666",
    "color" : "#fafafa"
  });
  $(".con_a").hide();
  $("#btn_a").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_c").hide();
  $("#btn_c").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_d").hide();
  $("#btn_d").css({
    "background" : "none",
    "color" : "#333"
  });
});
});
$(function(){
$("#btn_c").click(function(){
  $(".con_c").show();
  $("#btn_c").css({
    "background" : "#666",
    "color" : "#fafafa"
  });
  $(".con_d").hide();
  $("#btn_d").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_a").hide();
  $("#btn_a").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_b").hide();
  $("#btn_b").css({
    "background" : "none",
    "color" : "#333"
  });
});
});
$(function(){
$("#btn_d").click(function(){
  $(".con_d").show();
  $("#btn_d").css({
    "background" : "#666",
    "color" : "#fafafa"
  });
  $(".con_a").hide();
  $("#btn_a").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_c").hide();
  $("#btn_c").css({
    "background" : "none",
    "color" : "#333"
  });
  $(".con_b").hide();
  $("#btn_b").css({
    "background" : "none",
    "color" : "#333"
  });
});
});

let header = document.querySelector("nav");
let headerHeight = 1200;

window.onscroll = function () {
  let windowTop = window.scrollY;  
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } 
  else {
    header.classList.remove("drop");
  }
};
