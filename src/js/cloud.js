import { Actor, DisplayMode, ExitViewPortEvent, Input, Vector } from "excalibur";
import { Resources } from "./resources";

export class Cloud extends Actor {
    constructor() {
        super({
            width: Resources.Cloud.width,
            height: Resources.Cloud.height
        });
        
    }
    onInitialize(engine){
        this.graphics.use(Resources.Cloud.toSprite());
        this.pos = new Vector(200, 200);
        this.vel = new Vector(-10, 0);
        this.scale = new Vector(4,4)
    }

    
}