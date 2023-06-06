import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";


export class Droplet extends Actor{
    x
    y
    constructor(x,y){
        super({
           width: Resources.Droplet.width,
           height: Resources.Droplet.height
        })

        this.x = x
        this.y = y
  }

    fallDown(){
        this.graphics.use(Resources.Droplet.toSprite())
        this.y = this.y + 10
        this.x = this.x - 40
        this.pos = new Vector(this.x,this.y)
    }
    

    onInitialize(){

        this.graphics.use(Resources.Droplet.toSprite())
        this.pos = new Vector(200, 200);
        this.vel = new Vector(-40, 10);
        this.scale = new Vector(0.1,0.1)
        
        
    }

    onPostUpdate(engine){
        if(this.pos.x < 0){
            this.pos = new Vector(600,200)
        }
    }
    
}
