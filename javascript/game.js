window.onload= function(){
    document.getElementsByClassName("start-button")[0].onclick = function() {
        let ocultar=document.getElementsByClassName("inicio")[0]
        ocultar=ocultar.setAttribute('class','init')
        Game.clickSound()
        startGame()
    }

    document.getElementsByClassName("start-button")[2].onclick = () => {
        document.getElementById("insertLost").className = "level-complete"
        Game.clickSound()
        Game.start()   
    }

    document.getElementsByClassName("start-button")[1].onclick = () => {
        document.getElementById("insertWin").className = "level-complete"
        Game.clickSound()
        Game.level++
        if(Game.level<4){
            Game.start()   
        }
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
    level: 1,
    init: function(id){
        this.canvasDom=document.getElementById(id)
        this.ctx=this.canvasDom.getContext('2d')
        this.setDimensions()
        this.start()
    },
    reset: function() {
        clearInterval(this.interval)
        if (this.level === 1){
            this.grid = [
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
            ]
        }
        else if (this.level === 2){
            this.grid = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [0,2,2,5,2,2,1,1,1,2,2,3,2,2,2,5,2,1],
                [1,1,1,1,1,4,2,2,1,2,1,1,1,1,1,1,2,1],
                [1,2,2,5,2,2,1,3,2,2,1,1,1,1,1,1,2,1],
                [1,5,1,1,1,2,1,2,1,2,2,2,2,2,75,2,3,1],
                [1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1,2,1],
                [1,3,2,2,6936,5,1,2,1,1,2,3,2,1,2,1,2,1],
                [1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1,2,1],
                [1,2,1,1,2,2,2,2,1,1,2,1,2,1,2,1,2,1],
                [1,5,1,1,2,1,1,1,1,1,2,1,2,1,2,3,2,6],
                [1,2,2,2,2,5,2,2,2,3,2,1,2,5,2,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            ]
        } else if (this.level === 3){
            this.grid = [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,2,2,75,1,2,2,5,1,1,1,1,1,1,1,1],
                [1,1,1,5,1,2,1,2,1,2,1,6936,2,2,5,1,1,1],
                [1,1,1,2,1,2,2,3,1,2,1,2,1,1,2,1,1,1],
                [1,1,1,2,1,2,1,2,1,2,1,2,1,1,2,1,1,1],
                [0,2,2,2,3,2,1,5,1,2,3,2,1,1,2,3,2,6],
                [1,1,1,5,1,2,1,1,1,1,1,2,1,1,1,1,1,1],
                [1,1,1,2,1,2,2,2,3,1,1,2,3,2,2,2,2,1],
                [1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1],
                [1,1,1,2,1,1,1,1,4,2,2,2,1,1,1,1,2,1],
                [1,1,1,3,2,2,2,5,2,1,1,5,2,2,2,2,3,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            ]
        }
       
        this.music=new Audio('sounds/back2.mp3')
        this.framescounter = 0
        this.finish=new Finish(this.ctx, this.grid)
        this.dog=new Dog(this.ctx,this.grid)
        this.cat=new Cat(this.ctx, this.grid)
        this.player= new Player(this.ctx,this.grid,this.sounds, this, 'Images/chica.svg')
        this.enemy= new Enemy(this.ctx, this.grid, 4, this)
        this.enemy2 = new Enemy(this.ctx, this.grid, 75, this)
        this.enemy3 = new Enemy(this.ctx, this.grid, 6936, this)
        this.enemies = [this.enemy,this.enemy2,this.enemy3]
        this.laberint= new Laberint(this.ctx, this.width, this.height, this.player, this.player2,this.cat, this.dog, this.finish, this.enemy, this.enemy2, this.enemy3, this.grid)
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

            if (this.music.ended || this.music.paused){
                this.music.currentTime = 0
                this.music.play()
            }
            this.clearAll()
            this.draw()
            this.points.init()
            this.move()

           // document.getElementsByClassName("start-button")[1].onclick = () => {
           //     this.win()
           // }

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
        this.music.pause()
        clearInterval(this.interval)
    },
    win: function() {
        this.stop()
    }
  
    }
