import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Droplet extends Actor{
    constructor(){
        super({
           width: Resources.Droplet.width,
           height: Resources.Droplet.height
        })
        this.velocity = new Vector(0, 10); // Verticale snelheid van de waterdruppel
  }
    

    onInitialize(){

        this.graphics.use(Resources.Droplet.toSprite())
        // this.pos = new Vector(200, 200);
        // this.vel = new Vector(-40, 10);
        // this.scale = new Vector(0.1,0.1)
        
    }

    onPostUpdate(engine){
        if(this.pos.x < 0){
            this.pos = new Vector(600,200)
        }
    }
    
}
