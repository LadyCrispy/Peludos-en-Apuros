class Player{
    constructor(ctx,grid){
        this.ctx=ctx
        this.w=35
        this.h=35
        this.row=undefined
        this.col=undefined
        this.grid=grid
        

    }

    drawPlayer(col, row){
        this.imgP=new Image()
        this.imgP.src= 'Images/chica.svg'
        this.ctx.drawImage(this.imgP,col,row,this.w, this.h)
    }

    setListeners(){
        document.onkeydown = e => {
            if(e.keyCode == 38){
                console.log("Arriba")
                this.moveUp()
            }
            if(e.keyCode==40){
                console.log("Abajo")
                this.moveDown()
            }
            if(e.keyCode==39){
                console.log("Derecha")
                this.moveRight()
            }
            if(e.keyCode==37){
                console.log("Izquierda")
                this.moveLeft()
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

        this.grid[this.row][this.col] = 2
        this.grid[this.row][this.col+1]=0

    }
    moveLeft(){
        this.playerPosition()

        this.grid[this.row][this.col] = 2
        this.grid[this.row][this.col-1]=0
    }
    moveUp(){
        this.playerPosition()

        this.grid[this.row][this.col]=2
        this.grid[this.row-1][this.col]=0
    }
    moveDown(){
        this.playerPosition()

        this.grid[this.row][this.col]=2
        this.grid[this.row+1][this.col]=0
    }
    

}
