function move() {
    var elem = document.getElementById("stamina");   
    var width = 100;
    var id = setInterval(frame, 700); //decrease by second
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        document.getElementById("stamina").innerHTML = staminaAlertBox();
        document.getElementById("stamina").innerHTML = "Lack of STAMINA";
        elem.style.width = 100+'%';
        elem.style.backgroundColor = "gray";        
      } else { //decreasing
        width--; 
        elem.style.width = width + '%'; 
        var num = width;
        num = num.toFixed(0)
        document.getElementById("demo").innerHTML = num;
      }
    }
  }
  function staminaAlertBox() {
    alert('You cannot move any more : Lack of Stamina');
  }