window.onload= function(){
    startGame()
}
function startGame(id){
    Game.init('canvas')
}

const Game={
    canvasDom: undefined,
    ctx:undefined,
    width:undefined,
    height:undefined,
    //player: undefined,
    grid:[
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,3,2,2,5,2,1,2,5,2,1,1,1,2,3,2,2,6],
        [1,2,1,1,1,2,2,2,1,2,1,1,1,2,1,1,1,1],
        [1,2,1,1,1,1,2,1,1,3,1,1,1,2,2,5,2,1],
        [1,2,2,3,1,1,4,1,1,2,1,1,1,1,1,1,2,1],
        [1,1,1,2,1,1,2,2,2,2,2,2,2,3,2,2,2,1],
        [1,1,2,2,2,1,1,1,1,3,1,1,1,1,1,1,1,1],
        [1,1,5,1,2,1,4,2,2,2,2,5,1,1,4,2,3,1],
        [1,1,2,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1],
        [1,1,2,1,3,2,2,1,1,2,1,2,1,1,2,1,2,1],
        [0,2,2,1,1,1,2,2,2,3,1,2,2,2,2,2,5,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
init: function(id){
    this.canvasDom=document.getElementById(id)
    this.ctx=this.canvasDom.getContext('2d')
    this.setDimensions()
    this.start()
},
reset: function() {
    this.finish=new Finish(this.ctx, this.grid)
    this.dog=new Dog(this.ctx,this.grid)
    this.cat=new Cat(this.ctx, this.grid)
    this.enemy= new Enemy(this.ctx, this.grid)
    this.player= new Player(this.ctx,this.grid)
    this.laberint= new Laberint(this.ctx, this.width, this.height, this.player,this.cat, this.dog, this.finish, this.enemy, this.grid)
    this.points= new Points(this.ctx, this.player)
},
setDimensions: function(){
    this.canvasDom.setAttribute('width', '1440')
    this.canvasDom.setAttribute('height', '960')
    this.width=1440
    this.height=960
},
start: function(){
    this.reset()
    this.player.setListeners()
    setInterval(()=>{
        this.clearAll()
        this.draw()
        this.points.init()
        this.move()
    }, 1000/60)
},
draw: function(){
    this.laberint.printLaberint()
    
},
 move: function(){
    //this.enemy.enemyMoves()
//     this.player.playerPosition()
//     this.cat.catPosition()
//     this.dog.dogPosition()
//     this.finish.finishPosition()    
//     this.enemy.enemyPosition()

 },
clearAll: function(){
    this.ctx.clearRect(0, 0, this.width, this.height)
},
//collision: function(){
//        
//    if(this.player.col < this.enemy.col + this.enemy.w &&
//        this.player.col + this.player.w > this.enemy.col &&
//        this.player.row < this.enemy.row + this.enemy.h &&
//        this.player.h + this.player.row > this.enemy.y){
//        }
//         
//        
//}

}