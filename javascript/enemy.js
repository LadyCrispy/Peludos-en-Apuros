class Enemy{
    constructor(ctx, grid, numerito){
        this.ctx=ctx
        this.grid=grid
        this.w=60
        this.h=60   
        this.row=undefined
        this.col=undefined
        this.imgE=new Image()
        this.imgE.src='Images/juguete.svg'
        this.movingUp = true,
        this.numerito = numerito
    }
    drawEnemy(col, row){
        this.ctx.drawImage(this.imgE, col, row, this.w, this.h)
    }
    enemyPosition(){
        this.grid.forEach((arr1,idx1) => {
            if(arr1.indexOf(this.numerito) >= 0) {
                this.row = idx1
                this.col = arr1.indexOf(this.numerito)
            }
        })
    }
    
    enemyMoves(){

        if (this.numerito===6936||this.numerito===75)
        if (this.enemyMoveUp() && this.movingUp){
            this.grid[this.row-1][this.col]= this.numerito
            this.grid[this.row][this.col]=2 
        } else {
            if (this.enemyMoveDown()){
                this.movingUp = false                
                this.grid[this.row+1][this.col]= this.numerito
                this.grid[this.row][this.col]=2
            } else {
                this.movingUp = true
            }
        }

        if (this.numerito===4)
        if (this.enemyMoveRight() && this.movingUp){
            this.grid[this.row][this.col+1]= this.numerito
            this.grid[this.row][this.col]=2 
        } else {
            if (this.enemyMoveLeft()){
                this.movingUp = false                
                this.grid[this.row][this.col-1]= this.numerito
                this.grid[this.row][this.col]=2
            } else {
                this.movingUp = true
            }
        }

        


        

    }
    enemyMoveUp(){
     this.enemyPosition()
        if(this.grid[this.row-1][this.col]!==1){
       return true  
         }
       return false
    }    
    enemyMoveDown(){
        this.enemyPosition()
        if(this.grid[this.row+1][this.col]!==1){
        return true
        }
        return false
    }
    enemyMoveRight(){
        this.enemyPosition()
        if(this.grid[this.row][this.col+1]!==1){
            return true
        }
        return false
    }    
 
    enemyMoveLeft(){
        this.enemyPosition()
        if(this.grid[this.row][this.col-1]!== 1){
            return true
        }
        return false
    }
}    