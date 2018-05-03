var width = 100;
var flag = 0
 function move() {
    var elem = document.getElementById("stamina");   
    var id = frame(); //decrease by second
    function frame() {
      width = document.getElementById("demo").innerHTML;
        if (width <= 0) {
        staminaAlertBox();
        elem.style.width = 100+'%';
        elem.style.backgroundColor = "gray";
        flag = 1;
      } else { //decreasing
        width--; 
        elem.style.width = width + '%'; 
        var num = width;
        num = num.toFixed(0);
        document.getElementById("demo").innerHTML = num;
      } 
    }
}
function resetStamina(){
  width = 100;
}
function staminaAlertBox() {
    alert('You cannot move any more : Lack of Stamina');
  }
function checkstamina(){
  return flag;
}
function restore(){
  flag = 0;  
}
function noKey() {
  try {event.keyCode = 0; }catch(e) { }
  event.cancelBubble = true;
  event.returnValue = false;
 
  return false;
 }
 