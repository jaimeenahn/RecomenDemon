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

            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x - 2][y] != MAP_CODE.wall && map[x - 2][y] != MAP_CODE.bull && map[x - 2][y] != MAP_CODE.boxedBull){
                    this.x--

                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }


                    if (map[x - 1][y] == MAP_CODE.house || map[x - 1][y] == MAP_CODE.boxedBull){
                        map[x - 1][y] = MAP_CODE.manBall
                    } else {
                        map[x - 1][y] = MAP_CODE.man
                    }

                    if (map[x - 2][y] == MAP_CODE.house){
                        map[x - 2][y] = MAP_CODE.boxedBull
                    } else {
                        map[x - 2][y] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.x--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x - 1][y] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.x--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x - 1][y] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }

    }
    moveDown (map){
        let x = this.x
        let y = this.y
        this.direction = 'down'

        let b = map[x + 1][y]
        switch (b) {

            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x + 2][y] != MAP_CODE.wall && map[x + 2][y] != MAP_CODE.bull && map[x + 2][y] != MAP_CODE.boxedBull){
                    this.x++

                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }

                    if (map[x + 1][y] == MAP_CODE.house || map[x + 1][y] == MAP_CODE.boxedBull){
                        map[x + 1][y] = MAP_CODE.manBall
                    } else {
                        map[x + 1][y] = MAP_CODE.man
                    }

                    if (map[x + 2][y] == MAP_CODE.house){
                        map[x + 2][y] = MAP_CODE.boxedBull
                    } else {
                        map[x + 2][y] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.x++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x + 1][y] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.x++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x + 1][y] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }

    }
    moveLeft (map){
        let x = this.x
        let y = this.y

        let b = map[x][y - 1]
        this.direction = 'left'
        switch (b) {

            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x][y - 2] != MAP_CODE.wall && map[x][y - 2] != MAP_CODE.bull && map[x][y - 2] != MAP_CODE.boxedBull){
                    this.y--

                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }

                    if (map[x][y - 1] == MAP_CODE.house || map[x][y - 1] == MAP_CODE.boxedBull){
                        map[x][y - 1] = MAP_CODE.manBall
                    } else {
                        map[x][y - 1] = MAP_CODE.man
                    }

                    if (map[x][y - 2] == MAP_CODE.house){
                        map[x][y - 2] = MAP_CODE.boxedBull
                    } else {
                        map[x][y - 2] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.y--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y - 1] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.y--
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
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
        // 右方格子
        let b = map[x][y + 1]
        this.direction = 'right'
        switch (b) {

            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x][y + 2] != MAP_CODE.wall && map[x][y + 2] != MAP_CODE.bull && map[x][y + 2] != MAP_CODE.boxedBull){
                    this.y++

                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }

                    if (map[x][y + 1] == MAP_CODE.house || map[x][y + 1] == MAP_CODE.boxedBull){
                        map[x][y + 1] = MAP_CODE.manBall
                    } else {
                        map[x][y + 1] = MAP_CODE.man
                    }

                    if (map[x][y + 2] == MAP_CODE.house){
                        map[x][y + 2] = MAP_CODE.boxedBull
                    } else {
                        map[x][y + 2] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.y++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y + 1] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.y++
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y + 1] = MAP_CODE.manBall
                break;
            default:
                alert('moveUp error!')
                break;
        }

    }
}