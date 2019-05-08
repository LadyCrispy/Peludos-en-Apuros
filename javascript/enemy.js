class Enemy{
    constructor(ctx, grid){
        this.ctx=ctx
        this.grid=grid
        this.w=60
        this.h=60   
        this.row=undefined
        this.col=undefined
        this.imgE=new Image()
        this.imgE.src='Images/juguete.svg'
    }
    drawEnemy(col, row){
        this.ctx.drawImage(this.imgE, col, row, this.w, this.h)
    }
    enemyPosition(){
        this.grid.forEach((arr1,idx1) => {
            if(arr1.indexOf(0) >= 0) {
                this.row = idx1
                this.col = arr1.indexOf(4)
            }
        })
    }
    
    enemyMoves(){
        this.enemyMoveUp()
        this.enemyMoveDown()
        this.enemyMoveRight()
        this.enemyMoveLeft()

    }
   // enemyMoveUp(){
   //     this.enemyPosition()
   //     if(this.grid[this.row-1][this.col]!==1){
   //         this.grid[this.row-1][this.col]= 4
   //         this.grid[this.row][this.col]=2
   // }        
//        }else if(this.grid[this.row-1][this.col]==1){
//             this.grid[this.row][this.col]=2
//             this.grid[this.row+1][this.col]=4
//         }
//     }    
//     enemyMoveDown(){
//         this.enemyPosition()
//         if(this.grid[this.row+1][this.col]!==1){
//             this.grid[this.row+1][this.col]= 4
//             this.grid[this.row][this.col]=2
//         }else if(this.grid[this.row+1][this.col]==1){
//             this.grid[this.row][this.col]=2
//             this.grid[this.row-1][this.col]=4
//         }
//     }
//     enemyMoveRight(){
//         this.enemyPosition()
//         if(this.grid[this.row][this.col+1]!==1){
//             this.grid[this.row][this.col+1]= 4
//             this.grid[this.row][this.col]=2
//         }else if(this.grid[this.row][this.col+1]==1){
//             this.grid[this.row][this.col]=2
//             this.grid[this.row][this.col-1]=4
//         }    

//     }
//     enemyMoveLeft(){
//         if(this.grid[this.row][this.col-1]!== 1){
//             this.grid[this.row][this.col-1]= 4
//             this.grid[this.row][this.col]=2
//         }else if(this.grid[this.row][this.col-1]==1){
//             this.grid[this.row][this.col]=2
//             this.grid[this.row][this.col+1]=4
//         }
    
//     }
            

    
}