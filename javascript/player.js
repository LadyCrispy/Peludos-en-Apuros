class Player{
    constructor(ctx,grid){
        this.ctx=ctx
        this.w=70
        this.h=70
        this.row=undefined
        this.col=undefined
        this.grid=grid
        this.counter=0
      //  this.shout = new Audio()
      //  this.shout.src="audio/shout.mp3"
      //  this.shout.play()

    }

    drawPlayer(col, row){
        this.imgP=new Image()
        this.imgP.src= 'Images/chica.svg'
        this.ctx.drawImage(this.imgP,col,row,this.w, this.h)
    }

    setListeners(){
        document.onkeydown = e => {
            if(e.keyCode == 38){
                this.moveUp()
                console.log("Arriba", this.counter)
            }
            if(e.keyCode==40){
                this.moveDown()
                console.log("Abajo", this.counter)
            }
            if(e.keyCode==39){
                this.moveRight()
                console.log("Derecha", this.counter)
            }
            if(e.keyCode==37){
                this.moveLeft()
                console.log("Izquierda", this.counter)
            }
        }
    }
    
    playerPosition(){
        
        this.grid.forEach((arr,idx) => {
            if(arr.indexOf(0) >= 0) {
                this.row = idx
                this.col = arr.indexOf(0)
            }
        })
        
    }
    moveRight(){
        this.playerPosition()
        if(this.grid[this.row][this.col+1]==3||this.grid[this.row][this.col+1]==5){
            this.counter++
            this.grid[this.row][this.col+1]=0
            this.grid[this.row][this.col] = 2
            //sonido
        }else if(this.grid[this.row][this.col+1]===6 && this.counter===15){
            this.grid[this.row][this.col] = 2
            //sonido
            alert('You win')

        }else if(this.grid[this.row][this.col+1]!==1){
            this.grid[this.row][this.col+1]=0
            this.grid[this.row][this.col] = 2
        
        }else if(this.grid[this.row][this.col+1]== 1){
            this.grid[this.row][this.col]=0
        }
        

    }
    moveLeft(){
        this.playerPosition()
        if(this.grid[this.row][this.col-1]==3||this.grid[this.row][this.col-1]==5){
            this.counter++
            this.grid[this.row][this.col-1]=0
            this.grid[this.row][this.col] = 2
            //sonido
        }else if(this.grid[this.row][this.col-1]==1||this.grid[10][0]===0){
        }else if(this.grid[this.row][this.col-1]!==1){
            this.grid[this.row][this.col-1]=0
            this.grid[this.row][this.col] = 2
        }

    }
    moveUp(){
        this.playerPosition()
        if(this.grid[this.row-1][this.col]==3||this.grid[this.row-1][this.col]==5){
            this.counter++
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
            //sonido
        }else if(this.grid[this.row-1][this.col]!==1){
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
        }else if(this.grid[this.row-1][this.col]==1)
        this.grid[this.row][this.col] = 0

    }
    moveDown(){
        this.playerPosition()
        if(this.grid[this.row+1][this.col]==3||this.grid[this.row+1][this.col]==5){
            this.counter++
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
            //sonido
        }else if(this.grid[this.row+1][this.col]!==1){
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
        }else if(this.grid[this.row+1][this.col]==1)
        this.grid[this.row][this.col] = 0
    }
    

}
