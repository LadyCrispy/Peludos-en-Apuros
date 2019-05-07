class Player{
    constructor(ctx,grid){
        this.ctx=ctx
        this.w=35
        this.h=35
        this.x=8
        this.y=600-90
        this.row= undefined
        this.col=undefined
        this.grid=grid

    }

    drawPlayer(){
        this.imgP=new Image()
        this.imgP.src= 'Images/chica.svg'
        this.ctx.drawImage(this.imgP,this.x,this.y, this.w, this.h)
    }

    setListeners(){
        document.onkeydown= ((e)=>{
            if(event.keycode==38){
                this.player.moveUp()
            }
            if(event.keycode==40){
                this.player.moveDown()
            }
            if(event.keycode==39){
                this.player.moveRight()
            }
            if(event.keycode==37){
                this.player.moveLeft()
            }
        })
    }

    playerPosition(){
        
        this.grid.forEach((arr,idx) => {
            if(arr.indexOf(0) >= 0) {
                this.row = idx
                this.col = arr.indexOf(0)
                return this.grid[this.row][this.col]
            }
        })
        
        
    }
    moveRight(){
        this.playerPosition()
        this.grid[this.row][this.col]=2
        this.grid[this.row][this.col+1]=0
    }
    moveLeft(){

    }
    moveUp(){

    }
    moveDown(){

    }
    

}
