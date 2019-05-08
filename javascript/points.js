class Points{
    constructor(ctx, player){
        this.ctx=ctx
        this.player = player
    }
    init(){
        this.ctx.font='50px sans-serif'
        this.ctx.fillStyle='white'
        this.ctx.fillText(this.player.counter, 745, 60)
    }
}