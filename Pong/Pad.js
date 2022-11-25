class Pad{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.x=0
        this.y=0
        this.vel=3
        this.largura=20
        this.altura=100
    }
    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0)
                this.x-=this.vel
        }
        if(this.teclado.direita){
            if(this.x < this.ctx.canvas.width-this.largura)
                this.x+=this.vel
        }
        if(this.teclado.esquerda){
            if(this.y > 0)
                this.y-=this.vel
        }
        if(this.teclado.esquerda){
            if(this.y < this.ctx.canvas.width-this.altura)
                this.y+=this.vel
        }
    }
    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}