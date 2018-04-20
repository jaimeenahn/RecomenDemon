var character = new Image();
character.src = "MainGuySpriteSheet.png";

var index = 0; //for character array
var x = 100; //for position on canvas
var y = 100; //for position on canvas

/* These 4 arrays hold the positions of the sprite images */
var downMan = [{srcX:0, srcY: 0, width: 41.3, height: 35},
    {srcX: 46, srcY: 0, width: 41.3, height: 35},
    {srcX: 92, srcY: 0, width: 41.3, height: 35}];

var rightMan = [{srcX: 0, srcY: 37, width: 41.3, height: 35},
    {srcX: 46, srcY: 37, width: 41.3, height: 35},
    {srcX: 92, srcY: 37, width: 41.3, height: 35}];

var upMan = [{srcX: 0, srcY: 72, width: 41.3, height: 35},
    {srcX: 46, srcY: 72, width: 41.3, height: 35},
    {srcX: 92, srcY: 72, width: 41.3, height: 35}];

var leftMan = [{srcX: 0, srcY: 108, width: 41.3, height: 35},
    {srcX: 46, srcY: 108, width: 41.3, height: 35},
    {srcX: 92, srcY: 108, width: 41.3, height: 35}];


/* These functions each will display the character going left/right/up/down,
   I couldn't tell how you were clearing the box after a character moves off it so you
    will probably have to change the .clearRect to match what you were already doing,
    the x and y coords will also need to be passed in from your map, and the 100 numbers can be
    edited to change the size of the character when its displayed */
function left(){
    ctx.clearRect(0, 0, canWidth, canHeight);
    ctx.drawImage(character, leftMan[index].srcX, leftMan[index].srcY,
        leftMan[index].width, leftMan[index].height, x-=5, y, 100, 100);
    if(index >= 2){ index = 0;}
    else{index++;}
}

function right(){
    ctx.clearRect(0, 0, canWidth, canHeight);
    ctx.drawImage(character, rightMan[index].srcX, rightMan[index].srcY,
        rightMan[index].width, rightMan[index].height, x+=5, y, 100, 100);
    if(index >= 2){ index = 0;}
    else{index++;}
}

function up(){
    ctx.clearRect(0, 0, canWidth, canHeight);
    ctx.drawImage(character, upMan[index].srcX, upMan[index].srcY,
        upMan[index].width, upMan[index].height, x, y-=5, 100, 100);
    if(index >= 2){ index = 1;}
    else{index++;}
}

function down(){
    ctx.clearRect(0, 0, canWidth, canHeight);
    ctx.drawImage(character, downMan[index].srcX, downMan[index].srcY,
        downMan[index].width, downMan[index].height, x, y+=5, 100, 100);
    if(index >= 2){ index = 0;}
    else{index++;}
}


/* This code is what you will use to call the animation functions,
   to change how far the character travels you can edit the count which
   is the number of times the movement function is called, it can be increased
   or decreased depending on how far you need the character to travel.
 */
var count = 0;
var intervalID = setInterval(function(){
    if(++count === 10 ){
        window.clearInterval(intervalID);
    }
    //up();
    //down();
    //left();
    right();
}, 100);