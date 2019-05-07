class Enemy{
    constructor(ctx, grid){
        this.ctx=ctx
        this.grid=grid
        this.w=35
        this.y=35
        this.row=undefined
        this.col=undefined
    }
    drawEnemy(col, row){
        this.imgE=new Image()
        this.imgE.src='Images/juguete.svg'
        this.ctx.drawImage(this.imgE , col, row, this.w, this.h)

    }
    enemyPosition(){
        this.grid.forEach((arr,idx) => {
            if(arr.indexOf(0) >= 0) {
                this.row = idx
                this.col = arr.indexOf(4)
            }
        })
    }
}