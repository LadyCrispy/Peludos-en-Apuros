class Player{
    constructor(ctx,grid){
        this.ctx=ctx
        this.w=35
        this.h=35
        this.x=8
        this.y=600-90
        this.grid=grid

    }

    drawPlayer(){
        this.imgP=new Image()
        this.imgP.src= 'Images/chica.svg'
        this.ctx.drawImage(this.imgP,this.x,this.y, this.w, this.h)
    }
    moveRight(){
        let row,col
        this.grid.forEach((row,idx) => {
            if(row.indexOf(0) >= 0) {
                col = row.indexOf(0) +1
                row = idx
            }
        })
        this.grid[this.row][this.col] = 0
        this.grid[this.row][this.col-1]=2
    }
    moveLeft(){

    }
    moveUp(){

    }
    moveDown(){

    }
    

}
