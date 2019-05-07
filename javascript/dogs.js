class Dog{
    constructor(ctx, grid){
        this.ctx=ctx
        this.grid=grid
        this.w=60
        this.h=60  
        this.row=undefined
        this.col=undefined    
    }

    drawDog(col,row){
        this.imgD=new Image()
        this.imgD.src='Images/dog.svg'
        this.ctx.drawImage(this.imgD, col, row, this.w, this.h)
    }
    dogPosition(){
        this.grid.forEach((arr,idx) => {
            if(arr.indexOf(0) >= 0) {
                this.row = idx
                this.col = arr.indexOf(5)
            }
        })
    }
}