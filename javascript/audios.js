class Audios{
    constructor(ctx){
        this.ctx=ctx
    }
    
    catSound(){
        this.miau= new Audio()
        this.miau.src='sounds/cat3.wav'
        this.miau.play()
    }
    dogSound(){
        this.guau= new Audio()
        this.guau.src='sounds/dog.mp3'
        this.guau.play()
    }
    miceSound(){
        this.mice= new Audio()
        this.mice.src='sounds/NFF-ghost.wav'
        this.mice.play()
    }
    startSound(){
        this.startSound=new Audio()
        this.startSound.src='sounds/button-14.mp3'
        this.startSound.play()
    }
}


