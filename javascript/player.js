class Player{
    constructor(ctx,grid, audio){
        this.ctx=ctx
        this.w=70
        this.h=70
        this.row=undefined
        this.col=undefined
        this.grid=grid
        this.counter=0
        this.audio=audio
        this.win=0
      

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
            this.audio.catSound()
        }else if(this.grid[this.row][this.col+1]==5){
            this.counter++
            this.grid[this.row][this.col+1]=0
            this.grid[this.row][this.col] = 2
            this.audio.dogSound()
        }else if(this.grid[this.row][this.col+1]===6 && this.counter===15){
            this.grid[this.row][this.col] = 2
            //sonido
            this.win=1
            this.winGame()
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
            this.audio.catSound()
        }else if(this.grid[this.row][this.col-1]==5){
            this.counter++
            this.grid[this.row][this.col-1]=0
            this.grid[this.row][this.col] = 2
            this.audio.dogSound()
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
            this.audio.catSound()
        }else if(this.grid[this.row-1][this.col]==5){
            this.counter++
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.audio.dogSound()
        }else if(this.grid[this.row-1][this.col]!==1){
            this.grid[this.row-1][this.col]=0
            this.grid[this.row][this.col] = 2
        }else if(this.grid[this.row-1][this.col]==1){
            this.grid[this.row][this.col] = 0
        }else if(this.grid[this.row-1][this.col] == 4||this.grid[this.row-1][this.col] == 75||this.grid[this.row-1][this.col] == 6936){
            this.grid[this.row-1][this.col]=2
            this.grid[this.row-1][this.col]=0

            this.endGame()
        }   
    } 
    
    moveDown(){
        this.playerPosition()
        if(this.grid[this.row+1][this.col]==3){
            this.counter++
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.audio.catSound()
        }else if(this.grid[this.row+1][this.col]==5){
            this.counter++
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
            this.audio.dogSound()
        }else if(this.grid[this.row+1][this.col]!==1){
            this.grid[this.row+1][this.col]=0
            this.grid[this.row][this.col] = 2
        }else if(this.grid[this.row+1][this.col]==1)
        this.grid[this.row][this.col] = 0
    }
    
    winGame (){
        document.querySelector(".level-complete").className = "complete"
     }

    notYet(){
        document.getElementById("insertNotYet").className = "not-yet"
        const text = document.createElement("div").innerHTML = "pruebaaaa"
        //document.getElementById("insertNotYet").appendChild(text)
        

     }
    
    endGame (){
        document.getElementById("insertLost").className = "lost"
     }
 

}
