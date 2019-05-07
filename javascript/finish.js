class Finish{
    constructor(ctx, grid){
        this.ctx=ctx
        this.grid=grid
        this.w=90
        this.h=90 
        this.row=undefined
        this.col=undefined    
    }

    drawFinish(col,row){
        this.imgF=new Image()
        this.imgF.src='Images/palacio.svg'
        this.ctx.drawImage(this.imgF, col, row, this.w, this.h)
    }
    finishPosition(){
        this.grid.forEach((arr,idx) => {
            if(arr.indexOf(0) >= 0) {
                this.row = idx
                this.col = arr.indexOf(6)
            }
        })
    }
}