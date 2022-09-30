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
