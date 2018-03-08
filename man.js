class Man {
    constructor(direction) {
        this.direction = 'down'
        this.x = 0
        this.y = 0
    }
        moveUp(map)
        {
            let x = this.x
            let y = this.y
            this.direction = 'up'
        }
        moveDown(map)
        {
            let x = this.x
            let y = this.y
        }
        moveLeft(map)
        {
            let x = this.x
            let y = this.y
            // left block
            let b = map[x][y - 1]
            this.direction = 'left'
        }
        moveRight (map) {
        let x = this.x
        let y = this.y

        let b = map[x][y + 1]
        this.direction = 'right'
        }
    }
