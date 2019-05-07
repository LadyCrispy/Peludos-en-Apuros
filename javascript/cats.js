class Cat{
    constructor(ctx, grid){
        this.ctx=ctx
        this.grid=grid
        this.w=60
        this.h=60  
        this.row=undefined
        this.col=undefined    
    }

    drawCat(col,row){
        this.imgC=new Image()
        this.imgC.src='Images/gato-morado.svg'
        this.ctx.drawImage(this.imgC, col, row, this.w, this.h)
    }
    catPosition(){
        this.grid.forEach((arr,idx) => {
            if(arr.indexOf(0) >= 0) {
                this.row = idx
                this.col = arr.indexOf(3)
            }
        })
    }
}