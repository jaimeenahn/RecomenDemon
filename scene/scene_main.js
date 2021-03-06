class SceneMain extends Scene{
    constructor (game){
        super(game)
        this.level = 1
        this.man = new Man('down')
        this.paused = false
        this.count = 0
        this.flag = 0
        this.dinning = 0
        this.loop = 0
        this.rank = 'S'
        document.write("<script type='text/javascript' src='stamina.js'><"+"/script>");
        var elem = document.getElementById("count");
        this.keydown = (event) => {
            let k = event.key
            if (!this.paused){
                if (k == 'ArrowUp'){
                    move();
                    this.flag = checkstamina();
                    if(!this.flag)
                        this.man.moveUp(this.map)
                    this.refresh(this.map)
                    this.count++;
                    if(this.count > 230 && this.count <=250){
                        this.rank = 'A'
                    }
                    else if(this.count > 250 && this.count <= 300){
                        this.rank = 'B'
                    }
                    else if(this.count > 300){
                        this.rank = 'C'
                    }
                    document.getElementById("rank").innerHTML= this.rank;
                    document.getElementById("count").innerHTML = this.count;
                }
                if (k == 'ArrowDown'){
                    move();
                    this.flag = checkstamina();
                    if(!this.flag)
                        this.man.moveDown(this.map)
                    this.refresh(this.map)
                    this.count++
                    if(this.count > 230 && this.count <=250){
                        this.rank = 'A'
                    }
                    else if(this.count > 250 && this.count <= 300){
                        this.rank = 'B'
                    }
                    else if(this.count > 300){
                        this.rank = 'C'
                    }
                    document.getElementById("rank").innerHTML= this.rank;
                    document.getElementById("count").innerHTML = this.count;
                }
                if (k == 'ArrowLeft'){
                    move();
                    this.flag = checkstamina();
                    if(!this.flag)
                        this.man.moveLeft(this.map)
                    this.refresh(this.map)
                    this.count++
                    if(this.count > 230 && this.count <=250){
                        this.rank = 'A'
                    }
                    else if(this.count > 250 && this.count <= 300){
                        this.rank = 'B'
                    }
                    else if(this.count > 300){
                        this.rank = 'C'
                    }
                    document.getElementById("rank").innerHTML= this.rank;
                    document.getElementById("count").innerHTML = this.count;
                }
                if (k == 'ArrowRight'){
                    move();
                    this.flag = checkstamina();
                    if(!this.flag)
                        this.man.moveRight(this.map)
                    this.refresh(this.map)
                    this.count++
                    if(this.count > 230 && this.count <=250){
                        this.rank = 'A'
                    }
                    else if(this.count > 250 && this.count <= 300){
                        this.rank = 'B'
                    }
                    else if(this.count > 300){
                        this.rank = 'C'
                    }
                    document.getElementById("rank").innerHTML= this.rank;
                    document.getElementById("count").innerHTML = this.count;
                }
                if (k == 'r'|| k == 'R'){
                    this.loadLevel (this.level)
                }
                if(this.man.passout==1 || this.flag==1){
                    this.paused = 1
                }
            }
            else {
                if (k == 'r' || k == 'R'){
                    var elem = document.getElementById("stamina");
                    if(this.flag == 1)
                    {   
                        restore()
                        this.flag = 0;
                        this.paused = 0;
                        this.man.passout = 0;
                        this.level = 1;
                        this.init();
                        elem.style.backgroundColor = "green";
                        document.getElementById("demo").innerHTML = 100
                        document.getElementById("Dinings").innerHTML = 0
                        this.count = 0
                        document.getElementById("count").innerHTML = this.count
                    }
                    else
                    {
                        this.flag = 0
                        this.level = 1
                        this.count = 0
                        document.getElementById("demo").innerHTML =  100
                        document.getElementById("count").innerHTML = this.count
                        document.getElementById("Dinings").innerHTML = 0
					    elem.style.width = document.getElementById("demo").innerHTML + '%';
                        this.init()
                        this.man.passout = 0
                        this.paused = 0
                    }
                    
                }
            }
        }
    }
    //Intialize the scene
    init (){
        //load map
        log('scene init')
        this.loadLevel(this.level)
        //add actionlistener
        window.addEventListener('keydown', this.keydown)
    }
    loadLevel (level){
        if(level == 0)
        {
            this.dinning = 0;
        }
        else
        {
            this.dinning = this.tmp = document.getElementById("count").innerHTML
        }
        let canvas = this.game.canvas
        this.game.context.clearRect(0, 0, canvas.width, canvas.height)
        level--
        // this.map = this.maps[level]
        this.map = new Array()
        for (let i = 0; i < this.maps[level].length; i++){
            this.map[i] = new Array()
            for (let j = 0; j < this.maps[level][i].length; j++){
                this.map[i][j] = this.maps[level][i][j]
            }
        }
        log(this.map)
        this.drawMap (this.map)
    }
    drawMap (map){
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                this.drawItem(j, i, 'block')
                if (map[i][j] == MAP_CODE.wall){
                    // wall
                    this.drawItem(j, i, 'wall')
                }
                if (map[i][j] == MAP_CODE.bull){
                    // bull
                    this.drawItem(j, i, 'bull')
                }
                if (map[i][j] == MAP_CODE.house){
                    // house
                    this.drawItem(j, i, 'house')
                }
                if (map[i][j] == MAP_CODE.man){
                    // man
                    this.man.x = i
                    this.man.y = j
                    //this.drawItem(j, i, 'currentblock')
                    this.drawItem(j, i, this.man.direction)
                }
                if (map[i][j] == MAP_CODE.boxedBull){
                    this.drawItem(j, i, 'boxedBull')
                }
                if (map[i][j] == MAP_CODE.manBall){
                    this.man.x = i
                    this.man.y = j
                    this.drawItem(j, i, 'house')
                    this.drawItem(j, i, this.man.direction)
                }
                if (map[i][j] == MAP_CODE.trap){
                    this.drawItem(j, i, 'trap')
                }
                if (map[i][j] == MAP_CODE.mantrap){
                    this.drawItem(j, i, 'trap')
                    this.drawItem(j, i, 'dead')
                }
            }
        }
    }
    drawItem (x, y, item){
        let w = CONFIG.blockWidth
        let img = this.game.images[item]
        let context = this.game.context
        context.drawImage(img, x * w, y * w, w, w)
    }

    refresh (map){
        let canvas = this.game.canvas
        let ctx = this.game.context
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.drawMap(map)
        // determine  win or lose
        if(this.isLose(map)){
            this.paused = true
            alert("Bulls are gone")
            }
        if (this.isWin(map)){
            // skip to next stage
            this.paused = true
            this.tmp = document.getElementById("count").innerHTML
            if(this.level >1){
            document.getElementById("Dinings").innerHTML = (this.count - this.dinning)*25;
            }
            else{
                document.getElementById("Dinings").innerHTML = (this.count)*25;
            }
            setTimeout(() => {
                this.nextLevel()
                this.paused = false
            }, 500);
        }
    }
    isWin (map){
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                if (map[i][j] == MAP_CODE.house || map[i][j] == MAP_CODE.manBall){
                    return false
                }
            }
        }
        return true
    }
    isLose (map){
        let bullcount = 0
        let homecount = 0
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                if(map[i][j] == MAP_CODE.house){
                    homecount++
                }
                if (map[i][j] == MAP_CODE.bull){
                    bullcount++
                }
            }
        }
        if(bullcount < homecount){
            return true}
        if(bullcount > 0){
            return false
        }
        else if(bullcount == 0 && homecount == 0 )
        {
            return false
        }
        return true
    }
    nextLevel (){
        this.level++
        if (this.level > this.maps.length){
            alert('Congrate')
            this.level = 1
            this.count = 0
            let scene = this.game.sceneFactory.getSceneTitleInstance()
            this.loadScene(scene)
            document.getElementById("count").innerHTML = 0;
            document.getElementById("Dinings").innerHTML = 0;
            document.getElementById("demo").innerHTML = 100;
            var elem = document.getElementById("stamina");
			elem.style.width = 100 + '%';
            return
        }
        this.loadLevel(this.level)
    }
    loadScene (scene){
        window.removeEventListener('keydown', this.keydown)
        scene.init()
    }

}
function call(){
    return 
}