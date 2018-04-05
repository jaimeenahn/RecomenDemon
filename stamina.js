var width = 100;
 
 function move() {
    var elem = document.getElementById("stamina");   
    var id = frame(); //decrease by second
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        document.getElementById("stamina").innerHTML = staminaAlertBox();
        document.getElementById("stamina").innerHTML = "Lack of STAMINA";
        elem.style.width = 100+'%';
        elem.style.backgroundColor = "gray";        
      } else { //decreasing
        width = width - 0.8; 
        elem.style.width = width + '%'; 
        var num = width;
        num = num.toFixed(0)
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
