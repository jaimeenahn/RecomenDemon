function move() {
    var elem = document.getElementById("stamina");   
    var width = 100;
    var Key = {
      _pressed: {},
    
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      
      isDown: function(keyCode) {
        return this._pressed[keyCode];
      },
      
      onKeydown: function(event) {
        this._pressed[event.keyCode] = true;
      },
      
      onKeyup: function(event) {
        delete this._pressed[event.keyCode];
      }
    };
    var id = setInterval(frame, 100);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        document.getElementById("stamina").innerHTML = staminaAlertBox();
        document.getElementById("stamina").innerHTML = "Lack of STAMINA";
        elem.style.width = 100+'%';
        elem.style.backgroundColor = "gray";        
      } else if(event.keyCode){
        window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
        window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
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