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
init: function(id){
    this.canvasDom=document.getElementById(id)
    this.ctx=this.canvasDom.getContext('2d')
    this.setDimensions()
    this.start()
    this.laberint= new Laberint(this.ctx, this.width, this.height)
    this.player= new Player(this.ctx)
},
setDimensions: function(){
    this.canvasDom.setAttribute('width', '900')
    this.canvasDom.setAttribute('height', '600')
    this.width=900
    this.height=600
},
start: function(){
    setInterval(()=>{
        this.draw()
        this.move()
    }, 1000/60)
},
draw: function(){
    this.laberint.printLaberint()
},
move: function(){
    this.player.moveRight()
}
}