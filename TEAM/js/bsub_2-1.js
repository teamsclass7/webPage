var count = 1;
var countEl = document.getElementById("count");
var total_count = document.getElementById("total_count"); //추가
var total_count_view = document.getElementById("total_count_view"); //추가
function plus(){
  count++;
  countEl.value = count;
  total_count_view.value = total_count.value * countEl.value; //추가
}
function minus(){
  
  if (count > 1) {
    count--;
    countEl.value = count;
  total_count_view.value = total_count_view.value - total_count.value; //추가  
  }  
}
