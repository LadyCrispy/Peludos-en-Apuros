class Laberint{
    constructor(ctx, w, h, player){
        this.ctx=ctx
        this.width=w
        this.height=h
        
    }
    printLaberint(){
        for(var row = 0; row < this.grid.length; row++){
          for(var col = 0; col < this.grid[row].length; col++){
            switch(this.grid[row][col]){
              case 0:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*50, row*50, 50, 50)
                this.player.drawPlayer()
              break;

              case 1:
                this.img=new Image()
                this.img.src='Images/pared.svg'
                this.ctx.drawImage(this.img, col*50, row*50, 50, 50)
                //const pattern= this.ctx.createPattern(this.img, 'repeat')
                //this.ctx.fillStyle= pattern
                //this.ctx.fillRect(col*50, row*50, 50, 50)
              break;
              case 2:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*50, row*50, 50, 50)
                //this.ctx.strokeStyle = 'black';
                //this.ctx.lineWidth = 1;
                //this.ctx.strokeRect(col*50, row*50, 50, 50);
                            
                
                //this.ctx.fillStyle = 'orange'
                //this.ctx.fillRect(col*50, row*50, 50, 50)
              break;
            }
          }
        }
    }










          








    
}