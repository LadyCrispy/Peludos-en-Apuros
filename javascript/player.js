class Player{
    constructor(ctx,grid, audio, game){
        this.ctx=ctx
        this.w=70
        this.h=70
        this.row=undefined
        this.col=undefined
        this.grid=grid
        this.counter=0
        this.audio=audio
        this.win=0
        this.game=game
        this.cat = new Audio()
        this.cat.src = "sounds/cat3.wav"
        this.guau= new Audio()
        this.guau.src='sounds/dog.mp3'
        this.mice= new Audio()
        this.mice.src='sounds/NFF-ghost.wav'
        this.winSound= new Audio()
        this.winSound.src='sounds/win1.wav'
        this.click=new Audio()
        this.click.src='sounds/button-14.mp3'

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
        if(this.grid[this.row][this.col+1]==3){
            this.counter++
            this.grid[this.row][this.col+1]=0
            this.grid[this.row][this.col] = 2
            this.cat.play()
        }else if(this.grid[this.row][this.col+1] == 4||this.grid[this.row][this.col+1] == 75||this.grid[this.row][this.col+1] == 6936){
            this.mice.play()
            this.endGame()
            this.game.win()     
        }else if(this.grid[this.row][this.col+1]==5){
            this.counter++
            this.grid[this.row][this.col+1]=0
            this.grid[this.row][this.col] = 2
            this.guau.play()
        }else if(this.grid[this.row][this.col+1]===6 && this.counter===15){
            this.grid[this.row][this.col] = 2
            this.winSound.play()
            this.win=1
            this.winGame()
            this.game.win()
            
        }else if(this.grid[this.row][this.col+1]===6 && this.counter!==15){
            this.grid[this.row][this.col] = 0
            this.win=2  
            this.notYet()
        }else if(this.grid[this.row][this.col+1]!==1){
            this.grid[this.row][this.col+1]=0
            this.grid[this.row][this.col] = 2
        
        }else if(this.grid[this.row][this.col+1]== 1){
            this.grid[this.row][this.col]=0
        }
        

    }
    moveLeft(){
        this.playerPosition()
        if(this.grid[this.row][this.col-1]==3){
            this.counter++
            this.grid[this.row][this.col-1]=0
            this.grid[this.row][this.col] = 2
            this.cat.play()
        }else if(this.grid[this.row][this.col-1] == 4||this.grid[this.row][this.col-1] == 75||this.grid[this.row][this.col-1] == 6936){
            this.mice.play()
            this.endGame()    
            this.game.win()
        }else if(this.grid[this.row][this.col-1]==5){
            this.counter++
            this.grid[this.row][this.col-1]=0
            this.grid[this.row][this.col] = 2
            this.guau.play()
        }else if(this.grid[this.row][this.col-1]==1||this.grid[10][0]===0){
        }else if(this.grid[this.row][this.col-1]!==1){
            this.grid[this.row][this.col-1]=0
            this.grid[this.row][this.col] = 2
        }

    }
    moveUp(){
        this.playerPosition()
        if(this.grid[this.row-1][this.col]==3){
            this.counter++
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.cat.play()
        }else if(this.grid[this.row-1][this.col]==5){
            this.counter++
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.guau.play()
        }else if(this.grid[this.row-1][this.col] == 4||this.grid[this.row-1][this.col] == 75||this.grid[this.row-1][this.col] == 6936){
            this.mice.play()
            this.endGame() 
            this.game.win()  
        }else if(this.grid[this.row-1][this.col]!==1){
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
        }else if(this.grid[this.row-1][this.col]==1){
            this.grid[this.row][this.col] = 0
        }
    } 
    
    moveDown(){
        this.playerPosition()
        if(this.grid[this.row+1][this.col]==3){
            this.counter++
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.cat.play()
        }else if(this.grid[this.row+1][this.col]==5){
            this.counter++
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.guau.play()
        }else if(this.grid[this.row+1][this.col] == 4||this.grid[this.row+1][this.col] == 75||this.grid[this.row+1][this.col] == 6936){
            this.mice.play()
            this.endGame() 
            this.game.win()   
        }else if(this.grid[this.row+1][this.col]!==1){
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
        }else if(this.grid[this.row+1][this.col]==1)
        this.grid[this.row][this.col] = 0
    }
    
    winGame (){
        document.getElementById("insertWin").className = "complete"
        this.game.stop()
     }

    notYet(){
        document.getElementById("insertNotYet").className = "not-yet"
       setTimeout(() => document.getElementById("insertNotYet").className = "level-complete", 2000) 
        
     }
    
    endGame (){
        document.getElementById("insertLost").className = "lost"
        this.game.stop()
     }
}