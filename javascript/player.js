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
        grid.forEach((row,idx) => {
            if(row.indexOf(0) >= 0) {
                row = idx
                col = row.indexOf(0) + 1
            }
        })
        grid[row][col] = 0
        grid[row][col-1]=2
    }
    moveLeft(){

    }
    moveUp(){

    }
    moveDown(){

    }
    

}
