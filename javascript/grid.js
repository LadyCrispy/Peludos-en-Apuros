class Laberint{
    constructor(ctx, w, h, player, player2, cat,dog, finish, enemy, enemy2, enemy3, grid){
        this.ctx=ctx
        this.width=w
        this.height=h
        this.player=player
        this.player2=player2
        this.finish=finish
        this.cat=cat
        this.dog=dog
        this.enemy=enemy
        this.enemy2=enemy2
        this.enemy3=enemy3
        this.grid=grid
        
    }
    printLaberint(){
        for(var row = 0; row < this.grid.length; row++){
          for(var col = 0; col < this.grid[row].length; col++){
            switch(this.grid[row][col]){
              case 0:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.player.drawPlayer(col*80,row*80)
              break;

              case 1:
                this.img=new Image()
                this.img.src='Images/brick-wall.svg'
                this.ctx.drawImage(this.img, col*80, row*80, 82, 80)
                //const pattern= this.ctx.createPattern(this.img, 'repeat')
                //this.ctx.fillStyle= pattern
                //this.ctx.fillRect(col*50, row*50, 50, 50)
              break;

              case 2:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                //this.ctx.strokeStyle = 'black';
                //this.ctx.lineWidth = 1;
                //this.ctx.strokeRect(col*50, row*50, 50, 50);
                            
                
                //this.ctx.fillStyle = 'orange'
                //this.ctx.fillRect(col*50, row*50, 50, 50)
              break;

              case 3:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.cat.drawCat(col*80, row*80)
              break;

              case 4:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.enemy.drawEnemy(col*80, row*80)
              break;

              case 5:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.dog.drawDog(col*80, row*80)
              break;

              case 6:
                //this.img2=new Image()
                //this.img2.src='Images/azulejo.svg'
                //this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.ctx.fillStyle = 'lightblue'
                this.ctx.fillRect(col*80, row*80, 80, 80)
                this.finish.drawFinish(col*80, row*80)
              break;

              case 75:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.enemy2.drawEnemy(col*80, row*80)
              break;

              case 6936:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.enemy3.drawEnemy(col*80, row*80)
              break;

              case 15:
                this.img2=new Image()
                this.img2.src='Images/azulejo.svg'
                this.ctx.drawImage(this.img2, col*80, row*80, 80, 80)
                this.player2.drawPlayer(col*80,row*80)
              break;

            }
          }
        }
    }










          








    
}