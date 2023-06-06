import { Actor, Vector} from "excalibur";
import { Resources } from "./resources";
import { Droplet } from "./droplet";

export class Cloud extends Actor {

    druppel

    constructor() {
        super({
            width: Resources.Cloud.width,
            height: Resources.Cloud.height
        });

        this.druppel = new Droplet();
        

    }

    

    onInitialize(engine){
    this.graphics.use(Resources.Cloud.toSprite());    
    this.pos = new Vector(200, 200);
    this.vel = new Vector(-40, 0);
    this.scale = new Vector(4, 4);

   
    

    }

    onPostUpdate(engine){
        if(this.pos.x < 0){
            this.pos = new Vector(600,200)
        }
    }  


   
}