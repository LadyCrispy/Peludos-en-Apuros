window.onload= function(){
    document.getElementsByClassName("start-button")[0].onclick = function() {
        let ocultar=document.getElementsByClassName("inicio")[0]
        ocultar=ocultar.setAttribute('class','init')
        Game.clickSound()
        startGame()
    }

   

 startGame = (id) => {
    let brown= document.getElementById("canvas")
    brown=brown.setAttribute("class","brown")
    Game.init('canvas')
    
    }   
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
        [1,2,2,3,1,1,75,1,1,2,1,1,1,1,1,1,2,1],
        [1,1,1,2,1,1,2,2,2,2,2,2,2,3,2,2,2,1],
        [1,1,2,2,2,1,1,1,1,3,1,1,1,1,1,1,1,1],
        [1,1,5,1,2,1,4,2,2,2,2,2,1,1,6936,2,3,1],
        [1,1,2,1,2,1,1,1,1,2,1,5,1,1,2,1,2,1],
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
        this.music=new Audio('sounds/NFF-dubbio.wav')
        this.music.loop=true
        this.framescounter = 0
        this.finish=new Finish(this.ctx, this.grid)
        this.dog=new Dog(this.ctx,this.grid)
        this.cat=new Cat(this.ctx, this.grid)
        this.enemy= new Enemy(this.ctx, this.grid, 4)
        this.enemy2 = new Enemy(this.ctx, this.grid, 75)
        this.enemy3 = new Enemy(this.ctx, this.grid, 6936)
        this.enemies = [this.enemy,this.enemy2,this.enemy3]
        
        this.player= new Player(this.ctx,this.grid,this.sounds, this)
        this.laberint= new Laberint(this.ctx, this.width, this.height, this.player,this.cat, this.dog, this.finish, this.enemy, this.enemy2, this.enemy3, this.grid)
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
        this.music.play()
        this.interval = setInterval(()=>{

            this.framescounter++

            this.clearAll()
            this.draw()
            this.points.init()
            this.move()

            document.getElementsByClassName("start-button")[1].onclick = () => {
                this.win()
            }

        }, 1000/60)
    },
    clickSound: function(){
        this.click=new Audio()
        this.click.src='sounds/button-14.mp3'
        this.click.play()
        
    },
    draw: function(){
        this.laberint.printLaberint()

    },
    move: function(){

        if (this.framescounter % 4 === 0){
            this.enemies.forEach(enemy => enemy.enemyMoves())
        }
   
    },
    clearAll: function(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    },
    stop: function() {
        clearInterval(this.interval)
    },
    win: function() {
            this.stop()
            this.start()
    }
  
    }
