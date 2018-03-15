class Man{
    constructor(direction){
        this.direction = 'down'
        this.x = 0
        this.y = 0
    }
    moveUp (map){
        let x = this.x
        let y = this.y
        this.direction = 'up'

        let b = map[x - 1][y]
        switch (b) {
            // box || box&ball
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x - 2][y] != MAP_CODE.wall && map[x - 2][y] != MAP_CODE.box && map[x - 2][y] != MAP_CODE.boxBall){
                    this.x--

                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.ball
                    } else {
                        map[x][y] = MAP_CODE.block
                    }

                    if (map[x - 1][y] == MAP_CODE.ball || map[x - 1][y] == MAP_CODE.boxBall){
                        map[x - 1][y] = MAP_CODE.manBall
                    } else {
                        map[x - 1][y] = MAP_CODE.man
                    }

                    if (map[x - 2][y] == MAP_CODE.ball){
                        map[x - 2][y] = MAP_CODE.boxBall
                    } else {
                        map[x - 2][y] = MAP_CODE.box
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.x--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x - 1][y] = MAP_CODE.man
                break;
            // ball
            case MAP_CODE.ball:
                this.x--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball    
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x - 1][y] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }
        // log(map)
    }
    moveDown (map){
        let x = this.x
        let y = this.y
        this.direction = 'down'
        // low block
        let b = map[x + 1][y]
        switch (b) {
            // box || box&ball
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x + 2][y] != MAP_CODE.wall && map[x + 2][y] != MAP_CODE.box && map[x + 2][y] != MAP_CODE.boxBall){
                    this.x++
                    // current standing postion has ball
                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.ball
                    } else {
                        map[x][y] = MAP_CODE.block
                    }
                    //  empty block to man
                    //  emty block is ball
                    if (map[x + 1][y] == MAP_CODE.ball || map[x + 1][y] == MAP_CODE.boxBall){
                        map[x + 1][y] = MAP_CODE.manBall
                    } else {
                        map[x + 1][y] = MAP_CODE.man
                    }
                    // bull's position
                    //  original is ball
                    if (map[x + 2][y] == MAP_CODE.ball){
                        map[x + 2][y] = MAP_CODE.boxBall
                    } else {
                        map[x + 2][y] = MAP_CODE.box
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.x++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x + 1][y] = MAP_CODE.man
                break;
            // ball
            case MAP_CODE.ball:
                this.x++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball    
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x + 1][y] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }
        // log(map)
    }
    moveLeft (map){
        let x = this.x
        let y = this.y
        // left block
        let b = map[x][y - 1]
        this.direction = 'left'
        switch (b) {
            // box || box&ball
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x][y - 2] != MAP_CODE.wall && map[x][y - 2] != MAP_CODE.box && map[x][y - 2] != MAP_CODE.boxBall){
                    this.y--
                    // current standing postion has ball
                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.ball
                    } else {
                        map[x][y] = MAP_CODE.block
                    }
                    // empty block to man
                    //  empty block is ball
                    if (map[x][y - 1] == MAP_CODE.ball || map[x][y - 1] == MAP_CODE.boxBall){
                        map[x][y - 1] = MAP_CODE.manBall
                    } else {
                        map[x][y - 1] = MAP_CODE.man
                    }

                    if (map[x][y - 2] == MAP_CODE.ball){
                        map[x][y - 2] = MAP_CODE.boxBall
                    } else {
                        map[x][y - 2] = MAP_CODE.box
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.y--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y - 1] = MAP_CODE.man
                break;
            // ball
            case MAP_CODE.ball:
                this.y--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball    
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y - 1] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }
        // log(map)
    }
    moveRight (map){
        let x = this.x
        let y = this.y

        let b = map[x][y + 1]
        this.direction = 'right'
        switch (b) {
            // box || box&ball
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x][y + 2] != MAP_CODE.wall && map[x][y + 2] != MAP_CODE.box && map[x][y + 2] != MAP_CODE.boxBall){
                    this.y++

                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.ball
                    } else {
                        map[x][y] = MAP_CODE.block
                    }

                    if (map[x][y + 1] == MAP_CODE.ball || map[x][y + 1] == MAP_CODE.boxBall){
                        map[x][y + 1] = MAP_CODE.manBall
                    } else {
                        map[x][y + 1] = MAP_CODE.man
                    }

                    if (map[x][y + 2] == MAP_CODE.ball){
                        map[x][y + 2] = MAP_CODE.boxBall
                    } else {
                        map[x][y + 2] = MAP_CODE.box
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.y++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y + 1] = MAP_CODE.man
                break;
            // ball
            case MAP_CODE.ball:
                this.y++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.ball    
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y + 1] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }
        // log(map)
    }
}